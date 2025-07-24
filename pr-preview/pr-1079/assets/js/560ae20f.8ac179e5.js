"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[23300],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 800728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4f0c05c1273995c7ca8bf139ed4b9a0b.webp");

/***/ }),

/***/ 801943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'the-role-of-randomness-in-push-nodes',
	title: 'The Role of Randomness in Push Nodes',
	authors: [
		'zaryab'
	],
	image: './cover-image.webp',
	description: 'The Role of Randomness in Push Nodes',
	text: 'One important aspect of decentralized networks is that they don’t have any central authority that governs their working mechanism.',
	tags: [
		'Products'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/the-role-of-randomness-in-push-nodes",
  "source": "@site/blog/2024-08-26-randomness-in-push-nodes/index.md",
  "title": "The Role of Randomness in Push Nodes",
  "description": "The Role of Randomness in Push Nodes",
  "date": "2024-08-26T00:00:00.000Z",
  "formattedDate": "August 26, 2024",
  "tags": [
    {
      "label": "Products",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/products"
    }
  ],
  "readingTime": 4.876666666666667,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Zaryab Afser",
      "url": "https://x.com/zaryab_eth",
      "imageURL": "/assets/blog/authors/authorzaryab.png",
      "key": "zaryab"
    }
  ],
  "frontMatter": {
    "slug": "the-role-of-randomness-in-push-nodes",
    "title": "The Role of Randomness in Push Nodes",
    "authors": [
      "zaryab"
    ],
    "image": "./cover-image.webp",
    "description": "The Role of Randomness in Push Nodes",
    "text": "One important aspect of decentralized networks is that they don’t have any central authority that governs their working mechanism.",
    "tags": [
      "Products"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Cold Start Solutions: Scaling Consumer Crypto",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/cold-start-solutions-scaling-consumer-crypto"
  },
  "nextItem": {
    "title": "Push Protocol Monthly Updates: A Look Back at July",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-protocol-july-updates"
  }
};
const assets = {
"image": (__webpack_require__(884297)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Why do we even need Randomness?",
  "id": "why-do-we-even-need-randomness",
  "level": 3
}, {
  "value": "Quick Glance at Push Nodes",
  "id": "quick-glance-at-push-nodes",
  "level": 3
}, {
  "value": "How the Push Network uses Randomness to enhance its Security",
  "id": "how-the-push-network-uses-randomness-to-enhance-its-security",
  "level": 3
}, {
  "value": "<strong>Now, let’s dive deeper into the Randomness of the Push Network:</strong>",
  "id": "now-lets-dive-deeper-into-the-randomness-of-the-push-network",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of The Role of Randomness in Push Nodes ",
        src: (__webpack_require__(800728)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1125"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "One important aspect of decentralized networks is that they don’t have any central authority that governs their working mechanism. This means, the network must create a system and rules that allows them to not just securely communicate but to also form a consensus on the overall state of the network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While it's a complicated task and there exists a plethora of imperative ingredients that enable security and fairness in a decentralized network, one of the most significant ones is randomness."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Randomness, in its simplest form, refers to the lack of pattern or predictability in events. It's a concept that plays a crucial role in various fields, from mathematics and computer science to nature itself. Randomness is what makes a dice roll unpredictable, ensures fairness in games, and powers the algorithms behind secure cryptographic systems. In technology, especially within decentralized networks, randomness serves as a fundamental building block that underpins security and fairness, ensuring that processes are free from bias and manipulation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this article, we explore the significance of randomness in decentralized networks and how Push nodes incorporate randomness to enhance the security of the Push network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "why-do-we-even-need-randomness",
      children: "Why do we even need Randomness?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To begin with, let’s understand the importance of Randomness in decentralized networks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As previously mentioned, decentralized networks don’t have a central authority. Instead, they are made of a group of nodes located at different parts of the world. These nodes are responsible to act and perform certain actions in the network to keep it functional."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The selection of nodes to perform specific tasks must happen in a decentralized and fair manner to ensure no single actor in the network is capable of controlling the operations of the network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is where randomness plays a critical role."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In such decentralized systems, randomness is used to ensure the unpredictability of various processes, such as selecting validators, generating cryptographic keys, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This unpredictability is essential to prevent malicious actors from gaining control or manipulating the network. For example, in consensus mechanisms like Proof of Stake, a random selection of validators ensures that no single participant can dominate the process, thereby maintaining the decentralized nature of the network involved."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Randomness also enhances the resilience of blockchains by making it difficult for attackers to predict or influence outcomes. This unpredictability protects against various attacks, such as Sybil attacks or collusion, where adversaries attempt to gain disproportionate control over a network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Moreover, randomness is vital in achieving fairness as it helps ensure that every participant has an equal opportunity to contribute and benefit from a network, regardless of their resources or influence."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now that we have a basic understanding of how crucial randomness is, let’s understand its how Push Nodes use randomness to enhance their security and fairness."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "quick-glance-at-push-nodes",
      children: "Quick Glance at Push Nodes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/explaining-push-nodes/",
        children: "Push Nodes"
      }), " are a significant step towards the decentralized infrastructure for web3’s leading communication layer, the Push Protocol Network. This network is designed to facilitate secure and efficient movement of web3 notifications."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Network comprises different types of nodes such as Validator Nodes, Storage nodes, etc. A smart contract guards the network to maintain node staking and slashing. This is where the PUSH token is used."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-the-push-network-uses-randomness-to-enhance-its-security",
      children: "How the Push Network uses Randomness to enhance its Security"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this section, we will specifically understand the complete mechanism of how a transaction is submitted onto Push network and the role of randomness involved in the process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the Push Network, the role of randomization is incorporated at multiple levels which allows the network to prevent centralization while ensuring that it remains resilient against a variety of attacks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A crucial security mechanism of the Push Chain is the randomized selection of validators for transaction validation or block production. This mechanism leverages cryptographic randomness to ensure an unpredictable selection of validators & attestants ( ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "who verify whether or not a transaction is legit"
      }), " ) to enhance the network’s resilience and fairness."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A brief overview of the process looks something like this:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "To send a transaction to the network, the SDK/sender must attach a randomly generated token number to the transaction."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "To fetch this token, the SDK can request the same from any validator."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once received, the SDK attaches this token to the transaction and sends it to the network."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The network then uses this random token to cryptographically decide the specific validator to verify the particular transaction for further processing."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Additionally, the validator also randomly decides the validator set responsible for attesting to the transaction."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "now-lets-dive-deeper-into-the-randomness-of-the-push-network",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Now, let’s dive deeper into the Randomness of the Push Network:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push SDK selects a random validator (VR1) to generate a special signed (RANDX) hex token."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The generation is performed as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Generation of a Random Token:"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "The network is designed to ensure that a random token cannot merely be generated by a single validator. Instead, it must be a combined effort as every random token is ideally a collection of digitally signed pieces of random numbers provided by specific validators in the network."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["To determine the exact number of such pieces required to form the token, the Validator.sol smart contract defines a parameter called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "*required_random_number"
          }), ".* This indicates the number of required random peers whose signed values each validator must hold, at a given time. Additionally, the contract also defines an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "*expiration_time*"
          }), " parameter that defines the expiry time for these tokens which helps ensure that only freshly created tokens can be used for the creation of random tokens."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "It should be kept in mind that validators in the network periodically ping their peers to collect and exchange signed random values. The collected value from each validator is a combination of the random value itself and the validator's signature, ensuring it can be verifiable."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            children: "signedRandomValue = value + validatorSignature\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["As a result, at any given moment the validators should have a collection of signed random values by their peers, i.e., ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "signedRandomValue[]."
            })
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Once a validator has accumulated the necessary signed random values, it can generate the random token. This token is derived from the network's collective randomness using the following formula:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-jsx",
            children: "RANDX_Token = XOR(sha(signedRandomValue[i])) for all i\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "The SDK Requests for a Random Token"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Next, now let’s understand what happens when the SDK requests for a random token."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "As previously mentioned, before sending any transaction to the network, the SDK  requests for a random token that must be attached with the transaction being sent."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Now, since a random token value has already been generated ( as mentioned in step 1), any validator can provide this random token to the SDK."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "The SDK then attaches this random token to the transaction payloads and sends the transaction to the network."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Randomized Selection of Validators"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "This random token attached to the transaction plays a crucial role in randomly deciding which validator will process the transaction. With this token, the SDK deciphers the validator ID, to whom it must send the transaction for further processing."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-jsx",
                children: "validator_id = f( RANDX_TOKEN, contract_defaults)\n\n//OUTPUT looks like: \nvalidator_id = v1\n\nwhere contract default parameters could be:\na. min required quantity of random numbers,\nb. expiration time,\nc. a minimum number of peers that acknowledge the validator's online status.\n"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Upon receiving the transaction, the validator checks the random token in the transaction’s payload and validates it to confirm that it has been correctly assigned the role of handling this transaction."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["In case the validator identifies that it has been wrongly chosen, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "it can reject the transaction."
                })
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Once the accurate assignment of the validator is confirmed, the validator now creates a similar randomized process for creating a list of validators who must attest to the transaction being processed."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-jsx",
                children: "vlist = f(RANDX_Token_2nd, contract_defaults)\n\n// Output looks like this:\nvlist = V2, V50, V11, V8, V38, V17, V29\n"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["This list of validators is also responsible for verifying its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "legitimacy."
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "summary",
          children: "Summary"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "To summarize, the entire process detailed above adds a security layer with the inclusion of randomization at multiple levels, i.e.,:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "1st Level:"
            }), " The initial randomization starts with the SDK choosing any random validator to request for a token to be attached to the transaction."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "2nd Level: A token is generated"
            }), " using digitally signed pieces of random values from multiple random validators instead of relying on any single actor."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "3rd Level: A specific validator is randomly selected"
            }), " to create the token to be attached in the transaction occurs."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "4th Level:"
            }), " The final level of randomization determines which specific validator (VR2) will process a transaction and which validator set will act as attestants to verify the transaction."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "This multi-level randomness ensures that at every step, the network is secure, and fair, while continuing to operate in a completely decentralized fashion."
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 884297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4f0c05c1273995c7ca8bf139ed4b9a0b.webp");

/***/ })

}]);