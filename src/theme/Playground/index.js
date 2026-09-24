import BrowserOnly from '@docusaurus/BrowserOnly';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryErrorMessageFallback,
  usePrismTheme,
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Spinner, {
  SPINNER_TYPE,
} from '@site/src/components/reusables/spinners/SpinnerUnit';
import GLOBALS from '@site/src/config/globals';
import {
  Button,
  CopyButton,
  CopyContainer,
  ItemH,
  ItemV,
} from '@site/src/css/SharedStyling';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiCopy,
  FiLink,
} from 'react-icons/fi';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styles from './styles.module.css';

const CodingEnvironment = {
  REACT: 'React',
  NODEJS: 'NodeJS',
};

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader({ codeEnv }) {
  return (
    <div
      style={{
        padding: codeEnv == CodingEnvironment.NODEJS ? '1rem 1rem 0 1rem' : '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner
        size={42}
        color={GLOBALS.COLORS.PRIMARY_COLOR}
        type={SPINNER_TYPE.PROCESSING}
      />
    </div>
  );
}

function Preview({ codeEnv }) {
  return (
    <BrowserOnly fallback={<LivePreviewLoader codeEnv={codeEnv} />}>
      {() => (
        <>
          <ErrorBoundary
            fallback={(params) => (
              <ErrorBoundaryErrorMessageFallback {...params} />
            )}
          >
            <LivePreview />
          </ErrorBoundary>
          <LiveError />
        </>
      )}
    </BrowserOnly>
  );
}

function ResultWithHeader({ title, codeEnv, hidden, sourceCode, liveCodeRef }) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const displayTitle = title || (
    <Translate
      id='theme.Playground.result'
      description='The result label of the live codeblocks'
    >
      LIVE PREVIEW
    </Translate>
  );
  const previewClass = `${styles.playgroundPreview} preview${codeEnv}`;

  const compressCode = (code) => {
    try {
      // Use TextEncoder for proper Unicode handling
      const encoder = new TextEncoder();
      const data = encoder.encode(code);
      const binaryString = String.fromCharCode(...data);
      return btoa(binaryString);
    } catch (err) {
      console.error('Compression failed, using plain encoding', err);
      return encodeURIComponent(code);
    }
  };

  const handleCopy = async () => {
    try {
      const extractedCode = liveCodeRef.current ?? sourceCode;
      await navigator.clipboard.writeText(extractedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s

      // Track copy event
      if (typeof window !== 'undefined' && window.gtag) {
        const pageUrl = window.location.pathname;
        const codeHash = extractedCode.substring(0, 50).replace(/\s+/g, '_');
        window.gtag('event', 'code_snippet_copy', {
          event_category: 'code_playground',
          event_label: `${pageUrl}::${codeHash}`,
          page_url: pageUrl,
          snippet_preview: codeHash,
          code_env: codeEnv,
        });
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async (e) => {
    try {
      const extractedCode = liveCodeRef.current ?? sourceCode;
      const compressedCode = compressCode(extractedCode);
      const ideType = codeEnv === CodingEnvironment.NODEJS ? 'node' : 'react';
      const shareUrl = `${window.location.origin}/docs/chain/code-snippet#code=${compressedCode}&ide=${ideType}`;
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000); // reset after 2s

      // Track share event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'code_snippet_share', {
          event_category: 'code_playground',
          event_label: shareUrl,
          share_url: shareUrl,
          code_env: codeEnv,
          page_url: window.location.pathname,
        });
      }
    } catch (err) {
      console.error('Failed to share', err);
    }
  };

  return (
    <>
      <Header>
        <ItemH>
          <ItemV flex='1' alignItems='flex-start'>
            {displayTitle}
          </ItemV>
          {hidden && (
            <>
              <div className={styles.tooltipWrapper}>
                <CopyButton
                  onClick={handleShare}
                  style={{ marginRight: '8px' }}
                >
                  {shared ? (
                    <FiCheck color='var(--ifm-positive-action-color)' />
                  ) : (
                    <FiLink />
                  )}
                </CopyButton>
                <span className={styles.tooltip}>
                  {shared ? 'Copied!' : 'Copy playground link'}
                </span>
              </div>
              <div className={styles.tooltipWrapper}>
                <CopyButton onClick={handleCopy}>
                  {copied ? (
                    <FiCheck color='var(--ifm-positive-action-color)' />
                  ) : (
                    <FiCopy />
                  )}
                </CopyButton>
                <span className={styles.tooltip}>
                  {copied ? 'Copied!' : 'Copy code'}
                </span>
              </div>
            </>
          )}
        </ItemH>
      </Header>
      <div className={previewClass}>
        <Preview codeEnv={codeEnv} />
      </div>
    </>
  );
}

function ThemedLiveEditor({ code, className }) {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      key={String(isBrowser)}
      className={clsx(styles.playgroundEditor, className)}
      code={code}
    />
  );
}

function EditorWithHeader({ minimized, code, title, codeEnv, liveCodeRef }) {
  const [minimizedState, setMinimizedState] = useState(minimized);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const liveEditorClasses = `liveEditor${codeEnv}`;

  const displayTitle = title || (
    <Translate
      id='theme.Playground.liveEditor'
      description='The live editor label of the live codeblocks'
    >
      REACT PLAYGROUND
    </Translate>
  );

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      const currentCode = liveCodeRef.current ?? code;
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s

      // Track copy event
      if (typeof window !== 'undefined' && window.gtag) {
        const pageUrl = window.location.pathname;
        const codeHash = currentCode.substring(0, 50).replace(/\s+/g, '_');
        window.gtag('event', 'code_snippet_copy', {
          event_category: 'code_playground',
          event_label: `${pageUrl}::${codeHash}`,
          page_url: pageUrl,
          snippet_preview: codeHash,
          code_env: codeEnv,
        });
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const compressCode = (code) => {
    try {
      // Use TextEncoder for proper Unicode handling
      const encoder = new TextEncoder();
      const data = encoder.encode(code);
      const binaryString = String.fromCharCode(...data);
      return btoa(binaryString);
    } catch (err) {
      console.error('Compression failed, using plain encoding', err);
      return encodeURIComponent(code);
    }
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    try {
      const currentCode = liveCodeRef.current ?? code;
      const compressedCode = compressCode(currentCode);
      const ideType = codeEnv === CodingEnvironment.NODEJS ? 'node' : 'react';
      const shareUrl = `${window.location.origin}/docs/chain/code-snippet#code=${compressedCode}&ide=${ideType}`;
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000); // reset after 2s

      // Track share event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'code_snippet_share', {
          event_category: 'code_playground',
          event_label: shareUrl,
          share_url: shareUrl,
          code_env: codeEnv,
          page_url: window.location.pathname,
        });
      }
    } catch (err) {
      console.error('Failed to share', err);
    }
  };

  return (
    <>
      <Header>
        <Button
          onClick={() => setMinimizedState(!minimizedState)}
          textTransform='uppercase'
          background='transparent'
          padding='0px'
          display='flex'
          hoverBackground='transparent'
          borderRadius='0px'
          position='absolute'
          top='0'
          right='0'
          bottom='0'
          left='0'
          zIndex={1}
        />
        <ItemH>
          <ItemV flex='1' alignItems='flex-start'>
            {displayTitle}
          </ItemV>
          <CopyContainer>
            <div className={styles.tooltipWrapper}>
              <CopyButton onClick={handleShare} style={{ marginRight: '8px' }}>
                {shared ? (
                  <FiCheck color='var(--ifm-positive-action-color)' />
                ) : (
                  <FiLink />
                )}
              </CopyButton>
              <span className={styles.tooltip}>
                {shared ? 'Copied!' : 'Copy playground link'}
              </span>
            </div>
            <div className={styles.tooltipWrapper}>
              <CopyButton onClick={handleCopy}>
                {copied ? (
                  <FiCheck color='var(--ifm-positive-action-color)' />
                ) : (
                  <FiCopy />
                )}
              </CopyButton>
              <span className={styles.tooltip}>
                {copied ? 'Copied!' : 'Copy code'}
              </span>
            </div>
            {minimizedState ? <FiChevronDown /> : <FiChevronUp />}
          </CopyContainer>
        </ItemH>
      </Header>
      {!minimizedState && (
        <ThemedLiveEditor code={code} className={liveEditorClasses} />
      )}
    </>
  );
}

function changeToExecutableCode(code, isNodeJSEnv) {
  const execCode = !isNodeJSEnv
    ? code
        .split('\n')
        .reduce(
          (acc, line) => {
            // If we're not in an import statement and this line doesn't start an import,
            // keep the line
            if (!acc.inImport && !line.trim().startsWith('import')) {
              return {
                inImport: false,
                lines: [...acc.lines, line],
              };
            }

            // If this line contains a semicolon, we're done with the import
            if (line.includes(';')) {
              return {
                inImport: false,
                lines: acc.lines,
              };
            }

            // Otherwise we're in an import statement
            return {
              inImport: true,
              lines: acc.lines,
            };
          },
          {
            inImport: false,
            lines: [],
          }
        )
        .lines.join('\n')
        .replace(/^\n/, '')
        .trimEnd()
    : code;

  return execCode;
}

export default function Playground({
  children: rawChildren,
  transformCode,
  sourceCode,
  scope,
  ...props
}) {
  const [liveScope, setLiveScope] = useState(null);
  // Latest edited code of THIS playground, read by copy / share. Kept per
  // instance so one playground never copies or shares another's code.
  const liveCodeRef = useRef(null);
  const playgroundScope = useMemo(
    () => ({
      ...(scope ?? liveScope),
      __setPlaygroundLiveCode: (code) => {
        liveCodeRef.current = code;
      },
    }),
    [scope, liveScope]
  );
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;

  // ——— Custom props from any leading comment lines ———
  const lines = rawChildren.split('\n');
  let idx = 0;
  let minimized = false;
  let hidden = false;
  let isNodeJSEnv = false;
  let highlightRegexStart = null;
  let highlightRegexEnd = null;
  let gtagEventLabel = 'code_execution';

  // Process all top comment lines
  while (idx < lines.length && lines[idx].trim().startsWith('//')) {
    const line = lines[idx];
    if (/\/\/\s*customPropMinimized=['"]true['"]/.test(line)) minimized = true;
    if (/\/\/\s*customPropHidden=['"]true['"]/.test(line)) hidden = true;
    if (/\/\/\s*customPropNodeJSEnv=['"]true['"]/.test(line))
      isNodeJSEnv = true;

    // Check for start regex
    const matchStart = line.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);
    if (matchStart) {
      // rawValue is everything after the "=" on that comment line
      highlightRegexStart = matchStart[1].trim();
    }

    // Check for end regex
    const matchEnd = line.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);
    if (matchEnd) {
      highlightRegexEnd = matchEnd[1].trim();
    }

    // Check for gtag event label
    const matchGtag = line.match(/\/\/\s*customPropGTagEvent=(.+)$/);
    if (matchGtag) {
      gtagEventLabel = matchGtag[1].trim();
    }

    // remove any customProp flags from this line
    lines[idx] = lines[idx]
      .replace(/\/\/\s*customPropMinimized=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropHidden=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropNodeJSEnv=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropHighlightRegexStart=.*$/, '')
      .replace(/\/\/\s*customPropHighlightRegexEnd=.*$/, '')
      .replace(/\/\/\s*customPropGTagEvent=.*$/, '');

    // if line is now just whitespace or comment, drop it
    if (lines[idx].trim() === '//') {
      lines.splice(idx, 1);
    } else {
      idx++;
    }
  }

  const strippedChildren = lines.join('\n');

  // ——— remove imports for execution ———
  // but only if it's not a nodejs environment
  const execCode = changeToExecutableCode(strippedChildren, isNodeJSEnv);

  // ——— remove empty lines from top and bottom for execution ———
  const displayCode = strippedChildren.trim();

  // decide code environment
  const codeEnv = isNodeJSEnv
    ? CodingEnvironment.NODEJS
    : CodingEnvironment.REACT;

  useEffect(() => {
    const attachGlobals = async () => {
      if (typeof globalThis.Buffer === 'undefined') {
        const buffer = await import('buffer');
        globalThis.Buffer = buffer.Buffer;
      }

      if (typeof globalThis.process === 'undefined') {
        globalThis.process = { env: {} };
      }

      if (typeof globalThis.global === 'undefined') {
        globalThis.global = globalThis;
      }

      setLiveScope({
        Buffer: globalThis.Buffer,
        process: globalThis.process,
        global: globalThis,
      });
    };

    attachGlobals();
  }, []);

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={execCode}
        noInline={noInline}
        transformCode={(code) => {
          if (!isNodeJSEnv)
            liveCodeRef.current = code === execCode ? null : code;
          // Track React Live code execution
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'react_live_run', {
              event_category: isNodeJSEnv
                ? 'documentation_core'
                : 'documentation_ui',
              event_label: gtagEventLabel,
              value: 1,
            });
          }
          return `${changeToExecutableCode(code, isNodeJSEnv)};`;
        }}
        theme={prismTheme}
        {...props}
        scope={playgroundScope}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : 'LIVE APP PREVIEW'}
              codeEnv={codeEnv}
              hidden={hidden}
              sourceCode={sourceCode ?? displayCode}
              liveCodeRef={liveCodeRef}
            />
            {!hidden && (
              <div
                className={
                  highlightRegexStart
                    ? 'push-live-editor push-apply-highlight-in-live-editor'
                    : 'push-live-editor'
                }
                data-highlight-regex-start={highlightRegexStart}
                data-highlight-regex-end={highlightRegexEnd}
              >
                <EditorWithHeader
                  code={displayCode}
                  minimized={minimized}
                  title={
                    isNodeJSEnv ? 'VIRTUAL NODE IDE INNER' : 'REACT PLAYGROUND'
                  }
                  codeEnv={codeEnv}
                  liveCodeRef={liveCodeRef}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {!hidden && (
              <div
                className={
                  highlightRegexStart
                    ? 'push-live-editor push-apply-highlight-in-live-editor'
                    : 'push-live-editor'
                }
                data-highlight-regex-start={highlightRegexStart}
                data-highlight-regex-end={highlightRegexEnd}
              >
                <EditorWithHeader
                  code={displayCode}
                  minimized={minimized}
                  title={
                    isNodeJSEnv ? 'VIRTUAL NODE IDE INNER' : 'REACT PLAYGROUND'
                  }
                  codeEnv={codeEnv}
                  liveCodeRef={liveCodeRef}
                />
              </div>
            )}
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : 'LIVE APP PREVIEW'}
              codeEnv={codeEnv}
              hidden={hidden}
              sourceCode={sourceCode ?? displayCode}
              liveCodeRef={liveCodeRef}
            />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
