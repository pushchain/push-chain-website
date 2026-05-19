// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';

interface RepoI {
  title: string;
  url: string;
}

interface Props {
  repo: null | RepoI;
  children: string;
}

export default function NodeJSVirtualIDE({ repo = null, children }: Props) {
  const userPassedCode = children
    .trim()
    .split('\n')
    .map((line) => (line.startsWith(' ') ? line.slice(2) : line))
    .join('\n');

  return (
    <Playground
      showLineNumbers
      // pass everything your snippet needs into the scope
      scope={{
        ...ReactLiveScope,
        Buffer: require('buffer').Buffer,
        createPortal: require('react-dom').createPortal,
      }}
      // no-op: we already hand it the fully-wrapped code below
      transformCode={(code: string) => code}
    >
      {returnPlaygroundCode({ userPassedCode, repo })}
    </Playground>
  );
}

interface ReturnPlaygroundCodeProps {
  userPassedCode: string;
  repo: null | RepoI;
}

// wrap the raw snippet into your full IDE harness
function returnPlaygroundCode({
  userPassedCode,
  repo = null,
}: ReturnPlaygroundCodeProps): string {
  // check if customPropHighlightRegexStart is present
  let highlightRegexStart = null;
  // Look for a line that starts with any whitespace, then //, then customPropHighlightRegexStart=
  let lines = userPassedCode.split('\n');
  const highlightLine = lines.find((line) => {
    return line.trim().startsWith('// customPropHighlightRegexStart=');
  });
  const match = highlightLine?.match(
    /\/\/\s*customPropHighlightRegexStart=(.+)$/
  );
  if (match) {
    // rawValue is everything after the “=” on that comment line
    highlightRegexStart = match[1].trim();

    // remove the line from the code
    lines.splice(lines.indexOf(highlightLine), 1);
    userPassedCode = lines.join('\n');
  }

  // check if customPropHighlightRegexEnd is present
  let highlightRegexEnd = null;
  // Look for a line that starts with any whitespace, then //, then customPropHighlightRegexEnd=
  lines = userPassedCode.split('\n');
  const highlightLineEnd = lines.find((line) => {
    return line.trim().startsWith('// customPropHighlightRegexEnd=');
  });
  const matchEnd = highlightLineEnd?.match(
    /\/\/\s*customPropHighlightRegexEnd=(.+)$/
  );
  if (matchEnd) {
    // rawValue is everything after the “=” on that comment line
    highlightRegexEnd = matchEnd[1].trim();

    // remove the line from the code
    lines.splice(lines.indexOf(highlightLineEnd), 1);
    userPassedCode = lines.join('\n');
  }

  // check if customPropGTagEvent is present
  let gtagEventLabel = 'code_execution';
  lines = userPassedCode.split('\n');
  const gtagLine = lines.find((line) => {
    return line.trim().startsWith('// customPropGTagEvent=');
  });
  const gtagMatch = gtagLine?.match(/\/\/\s*customPropGTagEvent=(.+)$/);
  if (gtagMatch) {
    // rawValue is everything after the "=" on that comment line
    gtagEventLabel = gtagMatch[1].trim();

    // remove the line from the code
    lines.splice(lines.indexOf(gtagLine), 1);
    userPassedCode = lines.join('\n');
  }

  // escape backticks in the snippet
  const escaped = userPassedCode.replace(/`/g, '\\`');

  return `
  // customPropHidden='true'
  // customPropNodeJSEnv='true'
function App() {
  const defaultCode = \`${escaped}\`;

  const [code, setCode] = useState(defaultCode);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Prompt modal (replaces window.alert for :::prompt::: messages)
  const [promptModal, setPromptModal] = useState(null);
  const [copiedAddr, setCopiedAddr] = useState(null);
  const promptButtonRef = useRef(null);

  // Input modal (replaces window.prompt for un-prefixed rl.question calls)
  const [inputModal, setInputModal] = useState(null);
  const [inputModalValue, setInputModalValue] = useState('');
  const inputModalRef = useRef(null);

  useEffect(() => {
    window.__pushShowPrompt = (text) => new Promise((resolve, reject) => {
      setPromptModal({ text: text, resolve: resolve, reject: reject });
    });
    window.__pushShowInputPrompt = (text) => new Promise((resolve, reject) => {
      setInputModalValue('');
      setInputModal({ text: text, resolve: resolve, reject: reject });
    });
  }, []);

  useEffect(() => {
    if (!promptModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (promptModal.reject) promptModal.reject(new Error('Cancelled by user'));
        setPromptModal(null);
      }
    };
    window.addEventListener('keydown', handler);
    if (promptButtonRef.current) promptButtonRef.current.focus();
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [promptModal]);

  useEffect(() => {
    if (!inputModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (inputModal.reject) inputModal.reject(new Error('Cancelled by user'));
        setInputModal(null);
        setInputModalValue('');
      }
    };
    window.addEventListener('keydown', handler);
    if (inputModalRef.current) inputModalRef.current.focus();
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [inputModal]);

  const cancelPromptModal = () => {
    if (promptModal && promptModal.reject) promptModal.reject(new Error('Cancelled by user'));
    setPromptModal(null);
  };

  const confirmPromptModal = () => {
    if (promptModal && promptModal.resolve) promptModal.resolve();
    setPromptModal(null);
  };

  const submitInputModal = () => {
    if (inputModal && inputModal.resolve) inputModal.resolve(inputModalValue);
    setInputModal(null);
    setInputModalValue('');
  };

  const cancelInputModal = () => {
    if (inputModal && inputModal.reject) inputModal.reject(new Error('Cancelled by user'));
    setInputModal(null);
    setInputModalValue('');
  };

  const parsePromptTokens = (text) => {
    const re = new RegExp('(0x[a-fA-F0-9]{40})|(https?://[^\\\\s|]+)', 'g');
    const parts = [];
    let lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > lastIndex) parts.push({ t: 'text', v: text.slice(lastIndex, m.index) });
      if (m[1]) parts.push({ t: 'addr', v: m[1] });
      else if (m[2]) parts.push({ t: 'url', v: m[2] });
      lastIndex = m.index + m[0].length;
    }
    if (lastIndex < text.length) parts.push({ t: 'text', v: text.slice(lastIndex) });
    return parts;
  };

  // tiny ASCII spinner
  function AsciiLoader() {
    const frames = ['|','/','—', '\\\\'];
    const [i, setI] = useState(0);
    useEffect(() => {
      const t = setInterval(() => setI((n) => (n + 1) % frames.length), 100);
      return () => clearInterval(t);
    }, []);
    return <span style={{ fontFamily: 'Fira Code' }}>{frames[i]}</span>;
  }

  const consoleContainerRef = useRef<HTMLDivElement>(null);

  // whenever logs change, scroll to bottom
  useEffect(() => {
    const c = consoleContainerRef.current;
    if (c) {
      c.scrollTop = c.scrollHeight;
    }
  }, [logs]);

  // run virtual node code
  const runCode = async () => {
    setIsRunning(true);
    setLogs([]);

    // Track Virtual IDE code execution
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'virtual_ide_run', {
        event_category: 'documentation_core',
        event_label: '${gtagEventLabel}',
        value: 1,
      });
    }

    // let React paint the loader
    await new Promise((r) => setTimeout(r, 0));

    // clean imports
    const cleaned = code.replace(/^\\s*import.*$/gm, '');

       // our JSON.stringify shim: BigInts → strings
    const jsonShim = \`
      const _orig = JSON.stringify;
      JSON.stringify = (value, replacer, space) =>
       _orig(value, (key, val) =>
           typeof val === 'bigint' ? val.toString() : val
       , space);
     \`;

    // stub out process.stdin/stdout so readline won't crash, and support process.exit()
    const processShim = \`
      const process = {
        stdin: {},
        stdout: {},
        exit: (code = 0) => {
          // you can decide how you want to handle an exit,
          // e.g. throw so your “wrapped” async IIFE bails out:
          throw new Error('Process exited with code ' + code);
        },
      };
    \`;

    // a very minimal browser‐side readline shim
    const readlineShim = \`;
      // override Node’s readline to support both callback and Promise
      const readline = {
        createInterface: ({ input, output }) => {
          const iface = {
            question(questionText, callback) {
              const isPrompt = typeof questionText === 'string' && questionText.startsWith(':::prompt:::');
              const text = isPrompt
                ? questionText.replace(/^:::prompt:::/, '')
                : questionText;

              // If no callback provided, return a Promise
              if (typeof callback !== 'function') {
                if (isPrompt && typeof window.__pushShowPrompt === 'function') {
                  return window.__pushShowPrompt(text).then(() => '');
                }
                if (isPrompt) {
                  window.alert(text); // fallback if bridge not ready
                  return Promise.resolve('');
                }
                if (typeof window.__pushShowInputPrompt === 'function') {
                  return window.__pushShowInputPrompt(text);
                }
                return Promise.resolve(window.prompt(text));
              }

              // callback-style
              if (isPrompt && typeof window.__pushShowPrompt === 'function') {
                window.__pushShowPrompt(text).then(() => callback(''));
              } else if (isPrompt) {
                window.alert(text); // fallback if bridge not ready
                callback('');
              } else if (typeof window.__pushShowInputPrompt === 'function') {
                window.__pushShowInputPrompt(text).then((v) => callback(v));
              } else {
                callback(window.prompt(text));
              }
            },
            close() {},
          };
          return iface;
        },
      };
    \`;

    // shim console
    const consoleShim = {
      log: (...args: any[]) => setLogs(prev => [...prev, args.join(' ')]),
      error: (...args: any[]) => setLogs(prev => [...prev, 'Error: ' + args.join(' ')]),
    };

    // pass the wrapped code
      const fnBody = \`
      return (async () => {
        \${jsonShim}
        \${processShim}
        \${readlineShim}
        \${cleaned}
      })();
     \`;

      const scope = {
        ethers,
        PushChain,
        http,
        defineChain,
        Keypair,
        PublicKey,
        parseTransaction,
        webSocket,
        TypedData,
        TypedDataDomain,
        privateKeyToAccount,
        generatePrivateKey,
        sepolia,
        hexToBytes,
        bs58,
        keccak256,
        StandardMerkleTree,
        bytesToHex,
        createWalletClient,
        createPublicClient,
        console: consoleShim,
      }

    try {
      const executor = new Function(...Object.keys(scope), fnBody);
      await executor(...Object.values(scope));
    } catch (e: any) {
      consoleShim.error(e.message || e.toString());
    } finally {
      setIsRunning(false);
    }
  };

  const wrapper =  {
    margin: '0 auto',
    width: '100%'
  }

  const highlightRegexStart = {
    margin: '0 auto',
    width: 'inherit',
  }

  const newCodeDiv = {
    fontFamily: 'Fira Code',
    fontSize: 16,
    width: 'inherit',
  }

  const repoWrapper = {
    padding: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '12px',
  }

  const repoUrlDiv = {
    display: 'flex',
    flex: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    padding: '8.5px 13px 8.59px 13px',
  }

  const buttonDiv = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    flex: '1',
    justifyContent: 'flex-end'
  }

  const terminalDiv = {
    fontFamily: 'Fira Code',
    fontSize: 13,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    background: "var(--ifm-playground-header-terminalbg)",
    color: "var(--ifm-playground-header-terminalcolor)",
  }

  const headerDiv = {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    background: "transparent",
  }

  const repoButton = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.875rem',
    color: 'var(--ifm-playground-buttontext-color)',
    cursor: 'pointer',
  }

  const clearButton = {
    borderRadius: '12px',
    border: 'var(--ifm-playground-button-border)',
    display: 'flex',
    padding: '12.55px 13px 13.04px 13px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--ifm-playground-buttontextcolor)',
    cursor: 'pointer',
  }

  const runCodeButton = {
    borderRadius: '12px',
    background: '#D548EC',
    display: 'flex',
    padding: '13px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 'normal',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'DM Sans',
    color: '#FFF',
  }

  const arrowIcon = {
    color: 'var(--ifm-header-caret-color)',
    marginTop: '-6px'
  }


  const dotRed = {
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#f25f58",
    marginRight: 6,
  };

  const dotYellow = {
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#febe2e",
    marginRight: 6,
  };

  const dotGreen = {
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#58cb42",
  };

  const consoleContainer = {
    color: "var(--ifm-playground-header-terminalcolor)",
    padding: 12,
    minHeight: 180,
    maxHeight: 300,
    overflowY: "auto",
  }

  const bottomSection = {
    margin: '0 auto',
    background: 'var(--ifm-playground-header-bg)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    borderRadius: '0 0 16px 16px',
    borderTop: 'var(--ifm-playground-button-border)',
 }

  const asciiDiv = {
    position: 'absolute',
    bottom: 8,
    right: 12,
    padding: '4px 6px',
    background: '#333',
    borderRadius: 4,
    color: '#50fa7b',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }

  return (
    <div style={wrapper}>
      <div
        style={highlightRegexStart}
        className="${
          highlightRegexStart
            ? 'push-live-editor push-apply-highlight-in-live-editor'
            : 'push-live-editor'
        }"
        ${highlightRegexStart ? `data-highlight-regex-start="${highlightRegexStart}"` : ''}
        ${highlightRegexEnd ? `data-highlight-regex-end="${highlightRegexEnd}"` : ''}
      >

        {/* FIX: add empty line at the end of the code to ensure typing is not unfocused first time */}
        <LiveEditor
          code={code.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').concat('\\n                                                                                                                               ')}
          onChange={(newCode) => {
            // Remove trailing newlines and spaces before setting the code
            const cleaned = newCode.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').replace(/\\n\\s+$/g, '');
            setCode(cleaned);
            if (typeof window !== 'undefined') window.__playgroundLiveCode = cleaned;
          }}
          style={newCodeDiv}
        />
      </div>

      <div style={bottomSection}>
        <div
          style={repoWrapper}
        >
          {/* Repo button if available */}
          ${
            repo && repo.url
              ? `
                <div
                  style={repoUrlDiv}
                >
                  <a
                    href="${repo.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={repoButton}
                    className='btn'
                  >
                    ${repo.title || 'View Code'}
                  </a>

                  <BsBoxArrowUpRight style={arrowIcon} />
                </div>
              `
              : ''
          }
          <div
            style={buttonDiv}
          >
            <button
              onClick={() => setLogs([])}
              title="Clear console"
              style={clearButton}
              className='btn'
            >
              Clear Console
            </button>

            <button
              style={runCodeButton}
              onClick={runCode}
              className='btn'
            >
              <span style={{ fontSize: '16px', lineHeight: 1, marginTop: '2px' }}>►</span>
              <span>Run Code</span>
            </button>
          </div>

          {/* Hover & focus styles */}
          <style>{\`
            .btn:hover {
                opacity: 0.8;
            }
          \`}</style>
        </div>

        {/* Virtual “terminal” console */}
        <div
          style={terminalDiv}
        >
          {/* header bar */}
          <div
            style={headerDiv}
          >
            <span style={dotRed} />
            <span style={dotYellow} />
            <span style={dotGreen} />
          </div>

          {/* log output */}
          <div
            ref={consoleContainerRef}
            style={consoleContainer}
          >
            {logs.length === 0 ? (
              <div style={{ opacity: 0.6 }}>$ Virtual Node Environment with limited capabilities.<br />$ Hit "Run Code" to Execute.</div>
            ) : (
              logs.map((line, i) => (
                <div key={i}>
                  <span style={{ color: "#6a9955", marginRight: 4 }}>$</span>
                  {line}
                </div>
              ))
            )}
          </div>

          {/* ASCII loader, bottom-right */}
          {isRunning && (
            <div
              style={asciiDiv}
            >
              <AsciiLoader /> Running...
            </div>
          )}
        </div>
      </div>

      {/* Styled prompt modal (replaces window.alert for :::prompt::: messages) */}
      {promptModal && typeof document !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            fontFamily: 'DM Sans, system-ui, sans-serif',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) cancelPromptModal(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="push-prompt-title"
            style={{
              maxWidth: 580,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#131313',
              color: '#e8e8e8',
              borderRadius: 16,
              border: '1px solid #2a2a2a',
              padding: 28,
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 18,
              paddingBottom: 16,
              borderBottom: '1px solid #2a2a2a',
            }}>
              <span style={{
                display: 'inline-block',
                width: 10, height: 10,
                borderRadius: '50%',
                background: '#D548EC',
                boxShadow: '0 0 12px rgba(213,72,236,0.6)',
              }} />
              <h3 id="push-prompt-title" style={{
                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',
              }}>
                Action required — fund the accounts below
              </h3>
            </div>
            <div style={{
              fontSize: 13.5,
              lineHeight: 1.7,
              color: '#d4d4d4',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'Fira Code, ui-monospace, monospace',
            }}>
              {parsePromptTokens(promptModal.text).map((part, i) => {
                if (part.t === 'addr') return (
                  <span key={i} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#1f1f1f',
                    border: '1px solid #333',
                    borderRadius: 6,
                    padding: '2px 8px',
                    margin: '0 2px',
                    fontFamily: 'Fira Code, ui-monospace, monospace',
                    fontSize: 12.5,
                    color: '#fff',
                    verticalAlign: 'middle',
                  }}>
                    <span title={part.v}>{part.v.slice(0, 6) + '…' + part.v.slice(-4)}</span>
                    <button
                      type="button"
                      onClick={() => {
                        try {
                          navigator.clipboard.writeText(part.v);
                          setCopiedAddr(part.v);
                          setTimeout(() => setCopiedAddr((c) => c === part.v ? null : c), 1500);
                        } catch(e){}
                      }}
                      title={'Copy ' + part.v}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedAddr === part.v ? '#4ade80' : '#D548EC',
                        cursor: 'pointer',
                        fontSize: 11,
                        padding: 0,
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        transition: 'color 120ms ease',
                      }}
                    >
                      {copiedAddr === part.v ? 'copied' : 'copy'}
                    </button>
                  </span>
                );
                if (part.t === 'url') return (
                  <a key={i} href={part.v} target="_blank" rel="noopener noreferrer" style={{
                    color: '#D548EC',
                    wordBreak: 'break-all',
                    textUnderlineOffset: 2,
                  }}>
                    {part.v}
                  </a>
                );
                return <span key={i}>{part.v}</span>;
              })}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 24,
              paddingTop: 20,
              borderTop: '1px solid #2a2a2a',
              gap: 12,
            }}>
              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>
                Press Esc to cancel
              </span>
              <button
                ref={promptButtonRef}
                type="button"
                className="btn"
                onClick={confirmPromptModal}
                style={{
                  background: '#D548EC',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  padding: '12px 22px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans',
                }}
              >
                I've funded these — continue
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Styled input modal (replaces window.prompt for plain rl.question calls) */}
      {inputModal && typeof document !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            fontFamily: 'DM Sans, system-ui, sans-serif',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) cancelInputModal(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="push-input-title"
            style={{
              maxWidth: 520,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#131313',
              color: '#e8e8e8',
              borderRadius: 16,
              border: '1px solid #2a2a2a',
              padding: 28,
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 18,
              paddingBottom: 16,
              borderBottom: '1px solid #2a2a2a',
            }}>
              <span style={{
                display: 'inline-block',
                width: 10, height: 10,
                borderRadius: '50%',
                background: 'rgb(213, 72, 236)',
                boxShadow: '0 0 12px rgba(213, 72, 236,0.6)',
              }} />
              <h3 id="push-input-title" style={{
                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',
              }}>
                Input required
              </h3>
            </div>
            <div style={{
              fontSize: 13.5,
              lineHeight: 1.7,
              color: '#d4d4d4',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'Fira Code, ui-monospace, monospace',
              marginBottom: 16,
            }}>
              {inputModal.text}
            </div>
            <input
              ref={inputModalRef}
              type="text"
              value={inputModalValue}
              onChange={(e) => setInputModalValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') submitInputModal(); }}
              autoFocus
              style={{
                width: '100%',
                background: '#1f1f1f',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: 10,
                padding: '12px 14px',
                fontSize: 14,
                fontFamily: 'Fira Code, ui-monospace, monospace',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#d548ec'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#333'; }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 20,
              paddingTop: 16,
              borderTop: '1px solid #2a2a2a',
              gap: 12,
            }}>
              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>
                Enter to submit · Esc to cancel
              </span>
              <button
                type="button"
                onClick={cancelInputModal}
                style={{
                  background: 'transparent',
                  color: '#aaa',
                  border: '1px solid #333',
                  borderRadius: 12,
                  padding: '10px 16px',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn"
                onClick={submitInputModal}
                style={{
                  background: 'rgb(213, 72, 236)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  padding: '12px 22px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans',
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
      </div>
    );
  }
  `
    .replace(/^(?:\s*[\r\n])+/, '')
    .trim();
}
