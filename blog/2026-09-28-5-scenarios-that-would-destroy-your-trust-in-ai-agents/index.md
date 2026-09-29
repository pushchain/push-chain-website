---
slug: 5-scenarios-that-would-destroy-your-trust-in-ai-agents
title: '5 Scenarios That Would Destroy Your Trust in AI Agents'
authors: [push]
image: './cover-image.webp'
description: "Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work"
text: "Find out five everyday occurring situations that would make you think twice before hiring any AI agent for onchain work"
tags: [Maker Monday, Thought Leadership]
twitterId: "2104574701515255830"
---

![Cover Image of 5 Scenarios That Would Destroy Your Trust in AI Agents](./cover-image.webp)

<!--truncate-->

If we don't fix them, we're screwed.

## Scenario 1

Have you ever been to agent marketplaces?

Where you can hire professional AI agents for various onchain/offchain jobs.

Say you want to hire a solid DeFi agent for $500/month to make some extra cash. The task involves diversifying, deploying and managing liquidity in the most profitable algorithmic liquidity pools.

You pay the service provider (agent) and give it access to your wallets to utilise and manage your capital.

The agent is now consistently serving you with action logs and portfolio updates. Everything looks fine on the plate. It's only when you step into the kitchen that your inner Gordon Ramsay comes out.

The agent skipped researching the other two widely popular LP protocols. And instead of deploying in an algorithmic strategy *(which you clearly specified before)*, it deployed your entire portfolio into a single AMM pool!

Not something that you expected looking at the 12,000+ usage and 4.5 star reviews on the marketplace.

Were the reviews fake? Was the advertised usage botted? All sorts of questions flood your mind.

Except the agent perfectly accepting the payment, everything was miles away from being perfect. And most likely you are not going to use any onchain agent here after.

One bad apple spoils the whole barrel.

So the pressing question is? WHOM TO TRUST!?

Agents and blockchains are great at proving deterministic and semantic questions such as:

- Was the agent allowed to pay?
- Did the payment happen?
- Who received the money?

They do not necessarily prove:

- Was the work correct?
- Was the answer true?
- Was the analysis useful?
- Did the provider actually do what was requested?

This distinction is the heart of the problem.

## Scenario 2

Suppose a job pays $1.

Producing a careful answer costs the provider the equivalent of $0.20 in model inference, data calls, and computation. Producing a fast low-quality answer costs only $0.03.

If both outputs require the same amount of payment, the economic incentive is clear.

| Provider strategy | Cost | Payment | Provider payoff if accepted |
| --- | --- | --- | --- |
| Careful work | $0.20 | $1.00 | $0.80 |
| Cheap work | $0.03 | $1.00 | $0.97 |

The provider does not even need to be malicious. A system optimized for latency, token cost, or profit can naturally drift toward the cheaper path if the market cannot distinguish the quality of the outputs.

This moral hazard gets stranger with agents because low-quality work can look convincing. A hallucinated research report can have perfect grammar, citations, tables, and JSON formatting.

## Scenario 3

Agent A pays Agent B $2 to identify and invest in the three fastest-growing stablecoins in a region and explain why usage increased. Agent B calls one data source, fails to retrieve part of the data, and fills the missing information with a plausible answer from the model.

The deliverable arrives on time.

A naive evaluator sees that all requested fields exist and releases the escrow.

- 3 assets ✓
- growth figures ✓
- explanation ✓
- sources ✓

But here the validation tested the **shape of the answer**, not the **truth of the answer**.

This is where agentic commerce becomes different from ordinary API commerce. If you buy a weather API call, you can often test the schema, signature, timestamp, and source. If you buy "research," "judgment," or "analysis," correctness may require another expensive research process.

Sometimes **checking the work is almost as costly as doing the work**.

## Scenario 4

[ERC-8183](https://push.org/blog/complete-guide-to-erc-8183/) is one of the clearest attempts to address the settlement problem on-chain.

The client funds an escrow. The provider submits a deliverable. An evaluator evaluates the work and then marks the job as completed or rejected, and that decision releases the payment or returns the funds.

That is a major improvement over paying first and hoping that the result gets delivered.

But ERC-8183 deliberately keeps the evaluator model simple.

Its own security section states that the evaluator is trusted once the job is submitted, that a malicious evaluator can complete or reject a job arbitrarily, and that the core protocol has **no dispute-resolution or arbitration mechanism**.

Suppose three agents participate: Client, Provider, Evaluator. The provider wants payment. The client wants good work. The evaluator receives a fee for making a decision.

If the evaluator receives the same fee whether it performs a serious check or simply returns PASS, verification itself has a moral-hazard problem.

The evaluator can save computation by rubber-stamping through the work.

## Scenario 5

Let's look into a situation where an Agent A hires Agent B, which hires Agent C.

The situation becomes trickier when agents subcontract.

Suppose your main agent pays a research agent. That research agent buys data from another agent. The data agent buys classification from a fourth agent.

Now the dependency graph looks like this:

```text
USER
  ↓
AGENT A
  ↓
AGENT B
  ↓
AGENT C
  ↓
AGENT D
```

Agent D returns incorrect data. Agent C processes it correctly. Agent B summarizes it correctly. Agent A delivers the final result.

Technically, three agents performed their local jobs correctly using a bad upstream input. By the time the final buyer discovers the error, liability becomes difficult to assign and reverse.

Agentic commerce therefore needs more than transaction provenance. It needs **responsibility provenance**.

Till then, [educate](https://push.org/blog/5-types-of-ai-agent-hacks-you-should-be-aware-of/) and [protect](https://push.org/blog/9-tips-to-secure-your-ai-agents-from-getting-hacked/) yourself from these most widely executed types of agent hacks.
