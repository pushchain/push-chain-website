"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[21472],{

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

/***/ 360089:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'dmitry-buterin—rockstars-of-ethereum-vol-2',
	title: 'Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap',
	description: 'Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Hello Awesome PUSH community, an amazing interview conducted by our founders ; Harsh and Richa and we would like to introduce to you the session where our guest was the one and only Dmitry Buterin.',
	tags: [
		'Interview',
		'Blockchain',
		'Cryptocurrency',
		'Ethereum',
		'YouTube'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/dmitry-buterin—rockstars-of-ethereum-vol-2",
  "source": "@site/blog/2022-01-25-dmitry-buterin—rockstars-of-ethereum/index.md",
  "title": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
  "description": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
  "date": "2022-01-25T00:00:00.000Z",
  "formattedDate": "January 25, 2022",
  "tags": [
    {
      "label": "Interview",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/interview"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    },
    {
      "label": "Cryptocurrency",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/cryptocurrency"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "YouTube",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/you-tube"
    }
  ],
  "readingTime": 14.743333333333334,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://x.com/PushChain",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "dmitry-buterin—rockstars-of-ethereum-vol-2",
    "title": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
    "description": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Hello Awesome PUSH community, an amazing interview conducted by our founders ; Harsh and Richa and we would like to introduce to you the session where our guest was the one and only Dmitry Buterin.",
    "tags": [
      "Interview",
      "Blockchain",
      "Cryptocurrency",
      "Ethereum",
      "YouTube"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Grants Program Going Live!",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-grants-program-going-live"
  },
  "nextItem": {
    "title": "How to Get Started with EPNS (for Devs!)",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/how-to-get-started-with-epns"
  }
};
const assets = {
"image": (__webpack_require__(883427)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
        src: (__webpack_require__(981510)/* ["default"] */ .A) + "",
        width: "720",
        height: "360"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hello Awesome PUSH community, an amazing interview conducted by our founders ; Harsh and Richa and we would like to introduce to you the session where our guest was the one and only Dmitry Buterin."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this Session Recap, we will try to summarise the most interesting points for you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Dmitry, thanks for joining us, maybe we can kick things off by you know asking you, can you tell us a little bit about yourself and your background?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Sure yeah, I was born in the Soviet Union, and that too in the southern part of the Soviet Union in the Caucasus mountains and grew up there. I got a curious mind for science and stuff and then became interested in computers which was a very theoretical interest back then in the Soviet Union. Then, I went to study computer science in Moscow, where I met Natalia (my Vitalik’s mom) and got married. Then Vitalik was born, and I watched the Soviet Union fall apart, ended up accidentally starting a business with a few friends, eventually moving to Canada 22 years ago, and living here in Toronto, Canada, ever since. I mostly spent most of my life building tech businesses of various kinds, and then a few years ago, I sold the latest business, and I guess you can say that I’m semi-retired and have been engaging in a lot of things that peak my curiosity."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Well, you were talking about you growing up in the Soviet Union, so we would love to know what the culture was like back there when you were growing up and how life was back home?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " I mean, generally speaking life was really poor in the Soviet Union so the most you can say is that everyone was equally poor. Most people were more or less in the same position financially, there was a lot of propaganda about how bad the west is and that they were trying to destroy our freedoms and our quest for communism or whatever was happening. So yeah, there was lots of propaganda, lots of family times. Our family had a huge library and I loved reading books and also grew up in a region which had a lot of ethnic tension so that was also part of their background. Those were just some of the little bits and pieces and there are millions of them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Thanks for sharing that story. You briefly mentioned your entrepreneurship career, so we would love to know what your first startup was like and how you feel after becoming an entrepreneur?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Well, when i was growing up, I had no concept of entrepreneurship because entrepreneurship was not a thing in the Soviet Union, in the Soviet Union everything was supposed to be centrally around like, government takes care of everything, provides free education, free healthcare, free apartments, free everything and that sucked, everything sucked, it was all horrible you know because no centralized institution can really hope to you know like, it’s like, imagine if your brain tried to control all of your organs, your feet, your heart, your lungs and everything, it just doesn’t work that way so it was not really working so my point is that there was no concept of entrepreneurship so I didn’t have that in me but then also the Soviet Union fell apart and it was very difficult time for many people because all of their basic structures that supported them you know in some ways and now all of that was just falling apart and it was very difficult but also it gave us lots of freedom, lots of ingenuity and creativity so even as a student then, I ended up having to to make some money by being entrepreneurial a little bit like you know, I would go to different city to buy some stuff and then bring it to this city and try to sell it to people who didn’t have access to it here and stuff like that, so I had a little bit of taste of entrepreneurship while in university and then I worked for a little bit at the bank and then I worked for a big american company and then in a consulting capacity implementing complex IT systems and then I made a good friend (we have been good friends ever since) then who suggested that we should leave that company and we should start our own business so we ended up doing so and I really had no clue what I was doing so we just left that company, the three of us, and then we started our first serious business which was a joint venture with a danish software company, so yeah that was my first business."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " That’s amazing, so you’ve had so much experience you know bootstrapping companies while running maybe three successful businesses, so what’s some of the lessons that you’ve learned through your experience and what’s your advice for founders who are entering the space now?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " I try to stay away from advice because you know all advice is really specific to a particular moment, particular person, particular situation. In terms of my own lessons there were so many. Entrepreneurship is such an amazing, exciting and challenging journey where you get to learn so much and it will keep challenging you. For me as a guy who grew up basically being “all about knowing stuff”, being a nerd, into math and whatever sciences."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "So computers were really eye-opening, especially to realize that you can create the perfect technology, piece of software but have nobody to care about it, your business would just die right? So one huge lesson early on was that you have to sell it, you have to promote it and again growing up in the Soviet Union, the whole concept of selling and marketing was totally foreign. As you learn about this, for me as a guy who is smart and technical, it was like “oh, I have to talk to people and try to convince them, oh my god this is scary”. But yeah eventually, I found my groove and realized that good selling is not about pushing the stuff that you have created into others but it’s really about understanding what the world needs, what people need to adjust to it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That’s really for me, the whole concept of capitalism of entrepreneurship, it’s really about solving people’s problems. It’s not anything else. It’s like you try to identify what is the problem, who are the people who have this problem, then try to figure out the solution. Hopefully, this solution is better than other existing solutions. Then you keep listening to your customers to keep improving. You know the solution, you know what you are offering. Make it better, present it better to build up your reputation. That’s really what entrepreneurship is. These were the first wave of lessons."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are many others, like think of any business however unique it is, but also think about this in a structured way: a business has to build stuff, a business has to sell and market stuff, a business has to have a controlling accounting function and a business has to have a people function."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are awesome frameworks out there, so it’s really important to think about business. I mean it’s useful, I found that to think about business in a very structured way, so that was another layer of lessons around that. Additionally, of course eventually you realize that a business is built on people. In my personal experience, I’ve been “all in’’ tech businesses. In tech businesses you get to work with really smart amazing people. I love working with them but they can also be very hard to work with because if so many of us are smart, we end up over-aligning our brains. We think we know what’s happening and we know it better than anybody else. We’re so much smarter than everybody else but learning humility, learning about human emotions and emotional intelligence and all of the soft skills, that’s a different dimension of learning. An extremely important one."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "So in business it’s really about understanding people, understanding why this person is working here. On the surface you can say, you know we pay them money and they do what I tell them but that’s basically because, again in high-tech business if you want to build a successful high-tech business, you work with smart people, smart people who create amazing technologies can find jobs very easily. They’re not really here for whatever money they’re making here, money is useful and important and great resources but it is really important for them to understand why this business exists, what it does, is it making anything good? Are we here just to try to make some money? and spend that money? That’s not exciting, right."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The purpose of a business is extremely important to understand, being human in the business. How we interact with each other as equal human beings versus like an old school hierarchy, “oh i’m the important boss, I told you to do this, “go on” and do this thing right”. This doesn’t work with smart people. They will tell you to “go on” and go to some other place. This happens all the time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For me, those learnings were extremely important. The human side of the equation of building technological business. This also brings me to ethereum, a wonderful yet extremely complicated technology. After eight years it’s been around the complexity, unimaginable right?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "I have a bare superficial grasp of the complexity and the technical aspects of this. But also a really good grasp of the human aspects of ethereum, of all the amazing people of their ecosystem, of all the builders and all their startups. I have a really good sense of what it’s about. That gives me a lot of interest and confidence in what is happening to entrepreneurship."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It’s awesome to have a great technological idea but then mapping that idea to problems people have, mapping that to the mission, the purpose, the correctness of the business. Mapping that to the structure of a business that can unite people that can help support each other. To help people open up to their full potential, that’s exciting stuff!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Definitely!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " That’s some amazing entrepreneurial and also life lessons, all your experiences thank you so much for sharing all of that."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh:"
      }), " Awesome, so I think it’s February now, so the new metrics has been one of the"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "earliest adopters to when it comes to crypto, so I just wanted to know what excited you the most about bitcoin and building on that and what was your first reaction when you learned about ethereum?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " I have a curious mind so for me, learning about bitcoin was just an extremely interesting concept. I learned about it pretty much by accident, I think it was mentioned on a podcast that i’ve been listening for many years the podcast was about security of information systems but the guy (Steve Gibson) had a very curious mind and he mentions all these kinds of stuff, he mentioned bitcoin so I looked it up and explored it and it seemed like such a fascinating technology which was trying to create money without any kind of central authority and again, I cannot say that I paid a lot of attention to bitcoin and crypto until Vitalik really got into crypto space and then after seeing his interest in that, I started paying more attention and you know with his involvement and bitcoin magazine i started reading all of the"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "issues of bitcoin magazine and that was one of the skills that Vitalik always had that he could take a very complex thing right and all of those things people were trying to build on top of bitcoin or enhance bitcoin in some ways and then he could explain it really well for relatively non-technical people so i enjoyed learning through all of those articles and eventually eight years ago when Vitalik came up with their concept of Ethereum and i remember like in this very house where i’m sitting right now and he was sitting upstairs at the table and he showed me like “oh hey, check it out i’ve been working on this thing you know here’s a little white paper description of what it is and what do you think about this” right and i read the document and even though i only had the superficial knowledge of character but his writing was always very precise and concise and well and you know easy to understand so i’m reading this like, this makes total sense right and I mentioned that a few times that there’s the analogy that came to me and I used it quite a lot but bitcoin like, it was such an awesome invention for digital trustless money, I observed the emergence of internet so i saw the early websites that were built on html, just lines and maybe some colors, some images and then they became this interactive complicated, flashy, complex systems. When the programming languages were added to internet like EB script and javascript and whatnot, and for me ethereum was like, I could see that here’s this technology, but if we add programming language on top of this then it will become infinitely more flexible and you can do so much more with that right, the sky is the limit and then of course I had really no idea how complicated that would be and i guess Vitalik had some idea of how complicated that would be but nobody could have imagined the journey that was undertaken by the idea of ethereum over the last eight years."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Yep, I mean I love that analogy, by the way I read about it but he wanted to hear it again, so like Vitalik is someone we all look up to, his creation, his vision, I mean we are here because you know he created this thing. So, we would like to know a bit more about him, I would love to know how he was like while he was growing up."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Actually, today a really great article came out on COINTELEGRAPH and I highly recommend that you check it out, I mean it was pretty obvious early on that he was very intelligent, he learned to read very early on, he loved numbers and he learned math and when we gave him our old IBM pc, he started playing with that and microsoft excel became his favorite toy and initially it was just like drawing stuff and typing stuff randomly but then you know he learned different formulas and he started doing stuff so one could see that he really enjoyed learning those abstract concepts and interactions with complex systems and math and stuff like that. So when we moved to Canada, he was only six years old when we started living there and again learning a new language was a bit of a challenge but not a huge deal necessarily. Then he went to school and it was clear to his teachers that he was extremely gifted and then he ended up going to a gifted school and then we also sent him to all kinds of extra curriculum teachers and facilities to help him learn all kinds of stuff and yeah I mean that’s really something specific because there’s so much stuff."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Got it, so let’s go with what’s your favorite or one of your favorite moments with Vitalik?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Like there are so many of them right, but you know any parent knows that when you have children especially, when they are young, you want to buy them toys that you could not afford when you were growing up and i’m no exception so I remember when I was trying to buy him all kinds of lego sets because i used to dream about them and you know in the Soviet Union, there wasn’t much that you could get your hands on. No legos that’s for sure and the funny thing is that when he started playing with them, i think there’s a picture in their article today, like instead of building houses and stuff he was actually building numbers like “here’s five!” “here’s six!” and you know you could see that, numbers, they played a very important part in this, so I mean that’s kind of one of those little moments but again there are so many like teaching him to ride the bike, and you know getting him to try his first burger and all of those things."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " That’s so awesome to know. Moving back to butane time, so as an investor and without naming any project geometry can you share any funny or weird experience you had with someone?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " I cannot think of a particular situation, I mean there are times where I talked to a lot of people about a lot of things and the thing is like I find it surprising that for a lot of people it’s hard for them to communicate a specific question because people reach out to me and i don’t mind that at all and i’m very open to people reaching out to communicate and then they give me so much information I look at all of this like ”oh my god” okay, I don’t like getting overwhelmed and then I always ask him okay what is one specific question that you want me to answer right and it’s really funny because people then have a very hard time answering that and then they try to reiterate like, i did this and blah blah blah and my system like wait all of this is fine this is great like awesome but what is the specific question? like do you want me to invest money into this, do you want this?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " That’s so amazing and it’s something that we all can learn from. All right @Demetry, next one okay, this is interesting, so who owns step 3 and what the hell is going on with Jack?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Well, I mean again, people, it’s so interesting because we humans, we try to make some sense out of this world and you know the world, it’s very complex right and we come up with a name and then we came to know what it means and, this means that, and love means this, and happiness means that, you know everyone,s just whipped through the same thing like what the hell is webtree, well it’s our name of a cloud of emerging things that probably has something to do with decentralized technologies and creep the base and blah blah blah and you know the definitions are happening right now and like I’ve never met Jack and I don’t know him but it sounds like Jack is really into the camp of people who think that bitcoin is one and perfect solution to everything right and I don’t really believe that it’s feasible and again it’s really funny because the thing is I understand that in his own world he knows it really well that this is the perfect answer to everything like, in my world I know perfectly well that he’s wrong and you know this is how the world is. We all, each human being, we live in our own world, the world we constructed based on all of our personal knowledge and our brain genetics and whatnot. Human mind wants to find something perfect and static and simple that will keep us safe and happy and whatnot."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Right, so Dmitry my last question to you is that, in these eight years, ethereum has evolved so much so we want to know what is your vision for ethereum going to 2022 and for the upcoming future?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " If we look specifically for 2022, for me I see that we get into the fruition of all this level two technologies to scale Ethereum because again, ethereum is in so much demand that you know all the improvements that are being worked on the base layer are not able to sustain this huge level of demand and this is fine because ethereum again, ecosystem evolved and found a new way to address that right and again i’ve seen that over the years how much research and trial and error and thinking and whatever went into this and there was a plasma and there was this and that, and now we finally have this amazing solutions finally live and people are using them and they’re growing like crazy, so for me 2022 is very likely the era of ethereum L2s, I think and hopefully we will see lots and lots of people using those systems because again they’re much faster, they’re much cheaper and all of that stuff i would also say that we might see the emergence of some new areas of some new types of systems being built on top of decentralized blockchain starting with yorum, i’m thinking about decentralized social media, i’m thinking identity systems and things like that. So it definitely seems like that’s"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "going to be happening and in general i’m very excited like all of that stuff for me conceptually is really about giving more opportunities to so many more people around the world, so when Jack talks about like “oh vc funded blah blah blah” i don’t really get it, like what the hell is everybody talking about like connection they can learn programming they can do this they can actually go online, they can start using you know systems like polygon, optimal, orbitrum and they can contribute, they can make some money, they can play games like axi infinity make some money there, for me, this is amazing, the empowerment of humans around the world to create, to participate the economy to own their own money, the money that cannot be censored by their governments by anybody else that like i’m so excited for that in 2022 and beyond that like it’s beautiful."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Exactly, I mean that’s something that I feel as well, basically you have the power to create a global bank and all you need is a computer with an internet connection and you can do it from anywhere, this this is actually web3 and this is innovation like if this is not decentralization taking the power away to create bank from anywhere around the world then what is. So yeah I completely agree and this was such a fun interview Dmitry but we are not done yet, we do have a surprise sound of questions that are rapid fire which are prepared by Richa and customized to each and every person so yeah now Richa onto you."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Yeah sure thanks Harsh, so these are just very fun rapid questions that i’ll ask you, just take five-ten seconds to answer so if you’re ready we can start."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Sure!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Awesome, so what’s the best piece of advice you have received?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Understand that your own perspective is always biased, that’s some solid advice."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Can you show us something from your workspace right now?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " I’m in my bedroom so, I don’t have anything here."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " We’ll keep it for the next times, What is one hobby of Vitalik that we all don’t know about?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " He’s a pretty good player of Gore, you know that game?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Awesome, Who came up with the name Vitalik and why?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " We came up with this name between myself and his mom, i barely remember how that happened, a number of factors but i think one of them was that i had a childhood friend, he was a bit older and a very awesome guy who was a little bit of a mentor being a few years older to me when i was getting into electronics and stuff like that so that was his name so somehow that name felt good to me."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Nice cool,and what’s your favorite food?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry:"
      }), " There are so many, I love so many different types of food it’s hard for me to find just"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "one but I love pastry I’ll go with pastry croissants."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa:"
      }), " We’ll take that croissants, awesome, what’s the first thing that comes to your mind when i say the following words, Russia?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Pain"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " NFTs"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Beauty"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " What do you like to do, Sing or Dance?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Sing, that feels more natural to me."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Awesome, would you like to sing something?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Not really."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " All right, speed or decentralization your pick?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry:"
      }), " Decentralization. I’m a big believer in long-term solutions like life is not a sprint, life is a marathon."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa:"
      }), " Yeah, multichain?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " Whatever happens reality will know better."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " Awesome, really be on the lookout for that, uh your top three projects of ethereum are?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " MakerDAO, Uniswap and i’ll say AAVE"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Richa :"
      }), " All the OGs and finally, Dmitry, what does ethereum mean to you?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dmitry :"
      }), " For me, it’s a movement for really bright adn smart people who want to change the world for the better and who are doing this in a way that they’re having fun, nobody’s controlling and nobody is structuring that it’s very messy, it’s very disorganized, it’s very inefficient, it’s nothing like a well organized VC funded corporation/startup whatever, but it’s so beautiful, it’s so resilient, it’s so creative that it’s unstoppable."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Harsh :"
      }), " Awesome, alright so this brings us to the end of the interview, thank you so much Dmitry for coming over here and for sharing some of the really cool answers, now we get to know Vitalik a bit more and we get to know about your journey in such a glorious fashion, all right, i think we can wrap it up over here and to all our viewers see you next time bye!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here is the link to the youtube video if you want to watch the whole interview : ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=6v1wzCkS9G4",
        children: "https://www.youtube.com/watch?v=6v1wzCkS9G4"
      })]
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

/***/ 883427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21360116ab29b1e0bd25af7863404e34.webp");

/***/ }),

/***/ 981510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21360116ab29b1e0bd25af7863404e34.webp");

/***/ })

}]);