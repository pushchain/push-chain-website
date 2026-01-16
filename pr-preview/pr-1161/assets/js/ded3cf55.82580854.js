"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[66160],{

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 199712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-ee4e85e98663a0e84fbd700f8ea0e000.webp");

/***/ },

/***/ 273421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-061a3c2e2501b7bbd7e11d7779013b9f.webp");

/***/ },

/***/ 473409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_13_push_at_ethglobal_tokyo_index_md_ded_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_04_13_push_at_ethglobal_tokyo_index_md_ded_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-protocol-1',
	title: 'Push Protocolについて知っておくべきこと🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol（前身はEPNS）は、Web3通信プロトコルであり、任意のdAppsやスマートコントラクト、バックエンド、またはプロトコルが、ユーザーウォレットアドレスを介してオンチェーンとオフチェーンの両方において、オープンで、Gasless、マルチチェーン、及びプラットフォームに依存しない方法で通信できるようにします。',
	tags: [
		'Ethglobal',
		'Web3',
		'Push Notification',
		'Hackathons'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(629179)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Push Protocolとは？",
  "id": "push-protocolとは",
  "level": 2
}, {
  "value": "提供するもの",
  "id": "提供するもの",
  "level": 2
}, {
  "value": "仕組み",
  "id": "仕組み",
  "level": 2
}, {
  "value": "Push Notifications",
  "id": "push-notifications",
  "level": 3
}, {
  "value": "Push Chat",
  "id": "push-chat",
  "level": 3
}, {
  "value": "Push Group Chat",
  "id": "push-group-chat",
  "level": 3
}, {
  "value": "ユースケース",
  "id": "ユースケース",
  "level": 2
}, {
  "value": "⛵ NFTマーケットプレイス",
  "id": "-nftマーケットプレイス",
  "level": 3
}, {
  "value": "🖼️ NFT",
  "id": "️-nft",
  "level": 3
}, {
  "value": "🌿 Lens × PushChat",
  "id": "-lens--pushchat",
  "level": 3
}, {
  "value": "🌊💰Superfluid",
  "id": "superfluid",
  "level": 3
}, {
  "value": "🧑‍🚀 The Graph x Push",
  "id": "-the-graph-x-push",
  "level": 3
}, {
  "value": "🗳️ DAOツール",
  "id": "️-daoツール",
  "level": 3
}, {
  "value": "💜 マルチチェーン",
  "id": "-マルチチェーン",
  "level": 3
}, {
  "value": "🏦 Aave and other DeFi protocols",
  "id": "-aave-and-other-defi-protocols",
  "level": 3
}, {
  "value": "💬 PushChat",
  "id": "-pushchat",
  "level": 3
}, {
  "value": "🚜 Notify Defi farmers",
  "id": "-notify-defi-farmers",
  "level": 3
}, {
  "value": "🌐 Lens x PushChatを利用した分散型プロフェッショナルネットワーク",
  "id": "-lens-x-pushchatを利用した分散型プロフェッショナルネットワーク",
  "level": 3
}, {
  "value": "📺 Livepeer x PushChatを使用した分散型の短い動画プラットフォーム",
  "id": "-livepeer-x-pushchatを使用した分散型の短い動画プラットフォーム",
  "level": 3
}, {
  "value": "🦍 NFTローン清算bot",
  "id": "-nftローン清算bot",
  "level": 3
}, {
  "value": "🌱 Grants",
  "id": "-grants",
  "level": 3
}, {
  "value": "🏗️ Infrastructure projects",
  "id": "️-infrastructure-projects",
  "level": 3
}, {
  "value": "現在のユーザー",
  "id": "現在のユーザー",
  "level": 2
}, {
  "value": "次のステップ",
  "id": "次のステップ",
  "level": 2
}, {
  "value": "最後に",
  "id": "最後に",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover image of Push Protocolについて知っておくべきこと🔔",
        src: (__webpack_require__(533760)/* ["default"] */ .A) + "",
        width: "1100",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "push-protocolとは",
      children: "Push Protocolとは？"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Protocol（前身はEPNS）は、Web3通信プロトコルであり、任意のdAppsやスマートコントラクト、バックエンド、またはプロトコルが、ユーザーウォレットアドレスを介してオンチェーンとオフチェーンの両方において、オープンで、Gasless、マルチチェーン、及びプラットフォームに依存しない方法で通信できるようにします。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "提供するもの",
      children: "提供するもの"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push は、オープンなコミュニケーションのミドルウェアであり、通知、チャット、ストリーミングなどを可能にする製品群を開発しています。現在、Pushには2つの主要製品、Push NotificationsとPush Chatがあります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "仕組み",
      children: "仕組み"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "push-notifications",
      children: "Push Notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Notifications",
        src: (__webpack_require__(199712)/* ["default"] */ .A) + "",
        width: "1100",
        height: "1071"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "任意のdAppやプロトコルがユーザーに通知を送信したい場合、Pushを使ってチャンネルを設定することによって可能になります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "チャンネルを作成するために必要なものは以下の通りです："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Ethereumのトランザクション手数料（EPNSの手数料ではなく）を支払うために、50 PUSH分のETHが入ったウォレットが必要です。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "チャンネルで使用するための128x128ピクセルのロゴ。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "チャンネルの目的を簡潔に説明する説明文。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "アクションの呼びかけリンク（公式のウェブページ）"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "チャンネルの作成に成功すると、ウォレットアドレスベースで直接紐づけられたのそのチャネルの登録者に通知を送信できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "一度オプトインすると、登録者はそのチャンネルから直接通知を受信します。チャンネルの登録者ではないユーザーは、そのチャンネルからの通知をスパムボックスで受信します。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "さらに、チャンネルのオーナーは、通知送信権限を他の任意のウォレットアドレスに委任することもできます。これにより、選択されたウォレットアドレスがチャンネルを代表して通知を送信できます。ただし、チャンネルのオーナーはいつでも委任を取り消すことができます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/",
        children: "https://comms.push.org/docs/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "push-chat",
      children: "Push Chat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Chat",
        src: (__webpack_require__(273421)/* ["default"] */ .A) + "",
        width: "1100",
        height: "782"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chatは、メッセージをIPFSに暗号化、署名、保存し、Pushノードを介して送信する安全なメッセージングプロトコルです。Push Chatを使用すると、ユーザーは直接自分のウォレットから相手のウォレットに対して通信できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chat SDKの統合は非常に簡単で、以下の機能に分かれます："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "ユーザーメタデータ"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "ユーザーのチャットの取得"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "特定のチャットの個々のメッセージの取得"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "チャットへの返信"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/chat/ui-components/integrate-push-chat/",
        children: "https://comms.push.org/docs/chat/ui-components/integrate-push-chat/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "push-group-chat",
      children: "Push Group Chat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Group Chat",
        src: (__webpack_require__(917858)/* ["default"] */ .A) + "",
        width: "1100",
        height: "783"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Group Chatはその名の通り、Web3のユーザーがグループチャットを作成し、オンラインコミュニティを形成して、Web3上で自然に共有することを可能にする機能です。 Group ChatはPush Nodesの上に構築されており、暗号化されたチャットでは最大30人のユーザーと、暗号化されていないチャットでは無制限のユーザーと一緒にグループチャットを作成できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Group Chatには、以下のようなユーザーエクスペリエンスを向上させるための独自の機能がいくつかあります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "トークンゲート付きグループチャット：特定のERC20またはNFTを所有しているアドレスだけをグループチャットのメンバーとして許可することができます。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "パブリックグループとプライベートグループ：メッセージの内容を誰でも読むことができるオープンなグループ、またはメンバーだけがメッセージを読めるプライベートグループを作成することができます。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "グループメタ情報：管理者はグループ名、説明、およびグループ画像を設定できます。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "アドミンコントロール：グループチャットの作成者は、ユーザーを管理者に昇格させたり、グループ情報の変更、チャットからウォレットを追加または削除することができます。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "ファイル共有：ユーザーはGIF、画像を共有したり、ファイルをアップロードしてグループチャットのメンバーと共有することができます。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/chat/",
        title: "Docs explaining how to integrate Push Chat",
        children: "Integrating Push Chat"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ユースケース",
      children: "ユースケース"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-nftマーケットプレイス",
      children: "⛵ NFTマーケットプレイス"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "NFTマーケットプレイス上でPushChatを介してbuyerとsellerでメッセージを行えます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "️-nft",
      children: "🖼️ NFT"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "NFTローンの清算やオークション情報に関する通知をPush Protocolを介して統合できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-lens--pushchat",
      children: "🌿 Lens × PushChat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Lens x PushChatを使用して、.lensプロファイル<>プロファイル間のメッセージングを構築できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "superfluid",
      children: "🌊💰Superfluid"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Superfluidで駆動されたマネーストリーミングアプリを構築し、ストリームの更新、流動性の危機に瀕したストリーム、送信者によってキャンセルされたストリームなどに関するプッシュ通知を提供できます"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-the-graph-x-push",
      children: "🧑‍🚀 The Graph x Push"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["サブグラフの監視において、ある閾値、日付、またはイベントに対して通知を作成します。詳細については", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "こちら"
      }), "を参照してください。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "️-daoツール",
      children: "🗳️ DAOツール"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "PushChatまたはPushを使用して、新しい提案が投票対象になったときにDAOがENSドメイン またはウォレットにメッセージを送信できるようにします。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-マルチチェーン",
      children: "💜 マルチチェーン"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Pushが", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Polygon"
      }), "でローンチされているため、Polygon Mumbaiテストネットまたはメインネット上のdApp（NFT、DeFi、またはソーシャル）が、ユーザーと通信できるようになりました。スケーラブルで使いやすいdAppを構築しましょう。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-aave-and-other-defi-protocols",
      children: "🏦 Aave and other DeFi protocols"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ユーザーがプロトコルチームとチャットできるように、PushChatを使用してカスタマーサポート用のチャットボットを追加します。ユーザーのローンが強制清算される直前にプッシュ通知を送信します。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-pushchat",
      children: "💬 PushChat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "を使用して、スマートコントラクトのアップグレードや脆弱性がある場合にコミュニティにメッセージを送信する。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-notify-defi-farmers",
      children: "🚜 Notify Defi farmers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "イールドファーミングのAPYアラート、ステーキング報酬の受取可否状態など、Defiユーザーに通知を送信する。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-lens-x-pushchatを利用した分散型プロフェッショナルネットワーク",
      children: "🌐 Lens x PushChatを利用した分散型プロフェッショナルネットワーク"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "例えばLinkedInやAngelListなどを構築する。Push、ENS、Ceramic、IPFSなど、様々なスポンサーのテクノロジーを使用することができる。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-livepeer-x-pushchatを使用した分散型の短い動画プラットフォーム",
      children: "📺 Livepeer x PushChatを使用した分散型の短い動画プラットフォーム"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "例えばTikTokやReelなどを構築する。Lens、Push、LivePeer、The Graphを使用して、コンテンツクリエイターが自分のコンテンツを生成し、収益化することができるTikTokの基本機能を作成できる。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-nftローン清算bot",
      children: "🦍 NFTローン清算bot"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Push ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/notifications/showrunners-scaffold/",
        children: "Showrunner Scaffold"
      }), " とPush ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/notifications/tutorials/integrate-notifications-via-aws-sns/",
        children: "SNS webhook"
      }), " およびNFT APIを使用して、NFTローンの清算が発生する前にメール、Twitter、Telegramでアラートを送信するボットを作成することができます。ユースケースとして", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://cointelegraph.com/news/nearly-55m-worth-of-bored-ape-cryptopunks-nfts-risk-liquidation-amid-debt-crisis",
        children: "BAYCローン清算"
      }), "をご参照ください。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "-grants",
      children: "🌱 Grants"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "グラント受取人がグラントを受け取ったときに、PushChatを使用して通知またはDMを送信。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "️-infrastructure-projects",
      children: "🏗️ Infrastructure projects"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "IPFSに何かをアップロードしたとき、またはバリデーターが生成したEtherの量を表示する場合など、プロジェクトが完了したときにユーザーに通知を送信します"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "現在のユーザー",
      children: "現在のユーザー"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "現在のPush Ecosystemのユーザー数は6万人以上で、1,800万件以上の通知を送信しています。主要なパートナーには以下が含まれます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Uniswap"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Polygon"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "MakerDAO"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Lens"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "dYdX"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Aragon"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "DeveloperDAO"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Coindesk"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Decentraland"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "その他多数"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Ecosystem",
        src: (__webpack_require__(799295)/* ["default"] */ .A) + "",
        width: "1100",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "次のステップ",
      children: "次のステップ"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "EVM互換チェーンでのデプロイ"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "音声チャット"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "画面共有"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "トークングループにおけるトークン/支払いゲートの導入"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "最後に",
      children: "最後に"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Push ChatとPush Notificationsの仕組みに興味がある場合は、是非", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: "discordチャンネル"
      }), "に参加し、あなたが何をビルドしているのかを教えてください。Pushチームは、あなたがそれを実現するために必要なすべての開発者リソースを提供できます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["すぐにビルドを開始するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "https://comms.push.org/docs/",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "こちら"
        })
      }), "のPush開発者ドキュメントにアクセスしてください。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 482860
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1161/blog/push-protocol-1","source":"@site/blog/2023-04-13-push-at-ethglobal-tokyo/index.md","title":"Push Protocolについて知っておくべきこと🔔","description":"Cover image of Push Protocolについて知っておくべきこと🔔","date":"2023-04-13T00:00:00.000Z","tags":[{"inline":true,"label":"Ethglobal","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/ethglobal"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/web-3"},{"inline":true,"label":"Push Notification","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/push-notification"},{"inline":true,"label":"Hackathons","permalink":"/push-chain-website/pr-preview/pr-1161/blog/tags/hackathons"}],"readingTime":4.79,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1161/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1161/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-protocol-1","title":"Push Protocolについて知っておくべきこと🔔","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol（前身はEPNS）は、Web3通信プロトコルであり、任意のdAppsやスマートコントラクト、バックエンド、またはプロトコルが、ユーザーウォレットアドレスを介してオンチェーンとオフチェーンの両方において、オープンで、Gasless、マルチチェーン、及びプラットフォームに依存しない方法で通信できるようにします。","tags":["Ethglobal","Web3","Push Notification","Hackathons"]},"unlisted":false,"prevItem":{"title":"Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜","permalink":"/push-chain-website/pr-preview/pr-1161/blog/push-protocol-selected-as-communication-partner-for-d-app-store-kit"},"nextItem":{"title":"Push Launches Wallet-to-Wallet Video Chat📹","permalink":"/push-chain-website/pr-preview/pr-1161/blog/push-launches-wallet-to-wallet-video-chat"}}');

/***/ },

/***/ 533760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-48c8fe7f98a3fa972f29482bfaadcc46.webp");

/***/ },

/***/ 629179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-48c8fe7f98a3fa972f29482bfaadcc46.webp");

/***/ },

/***/ 799295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-3b8966f2001c7a41227254bbd3c4e33b.webp");

/***/ },

/***/ 917858
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-0c94ef42f633f9d44651d4aa79b3fc7f.webp");

/***/ }

}]);