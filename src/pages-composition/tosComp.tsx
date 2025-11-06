// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  A,
  B,
  Content,
  H1,
  ItemH,
  ItemV,
  LI,
  MultiContent,
  P,
  Section,
  Span,
  UL,
} from '@site/src/css/SharedStyling';

const TosComp = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <BodyContent className='skeletonsmall'>
          <MultiContent>
            <H1>{t('pages.tos.hero-section.title')}</H1>
            <Span>{t('pages.tos.hero-section.description')}</Span>
            <Span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              Last Updated on: 25th October 2025
            </Span>
          </MultiContent>

          <MultiContent>
            <ItemH
              alignSelf='stretch'
              justifyContent='flex-start'
              margin='0px 0px 40px 0px'
              flexDirection='column'
            >
              <ItemH
                alignItems='flex-start'
                margin='30px 0px 20px 0px'
                justifyContent='flex-start'
              >
                <P>
                  These Terms and Conditions ("<B>Terms</B>") establish the
                  agreement ("<B>Agreement</B>") between You (hereinafter
                  referred to as <B>"You," "Your," or "User"</B>) and PUSH
                  ("Push," "We," "Us," Or "Our"), governing Your access to and
                  use of the Services for its Apps, Smart Contracts, Services or
                  Platform as detailed in Section 4 (“<B>Services</B>”),
                  provided through our Website https://push.org and its
                  subdomains (including, but not limited to,{' '}
                  <A
                    href='https://wallet.push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://wallet.push.org
                  </A>
                  ,{' '}
                  <A
                    href='https://portal.push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://portal.push.org
                  </A>
                  ,{' '}
                  <A
                    href='https://faucet.push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://faucet.push.org
                  </A>
                  ,{' '}
                  <A
                    href='https://push.network'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://push.network
                  </A>
                  ,{' '}
                  <A
                    href='https://donut.push.network'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://donut.push.network
                  </A>
                  ) (collectively, the "Website" or "Platform") and excluding{' '}
                  <A
                    href='https://comms.push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://comms.push.org
                  </A>
                  , and{' '}
                  <A
                    href='https://app.push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    https://app.push.org
                  </A>{' '}
                  . This Agreement constitutes a binding and enforceable legal
                  contract between Push, its affiliates, and subsidiaries
                  worldwide, and you, an end-user of the Platform. In relation
                  to the Platform, you and PUSH are referred to separately as
                  "Party" and collectively as "Parties."
                </P>

                <P textTransform='uppercase'>
                  PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE PLATFORM,
                  APPS, SMART CONTRACTS, PARTICIPATING IN AIRDROP REWARDS THESE
                  TERMS GOVERN YOUR USE OF THE WEBSITE, UNLESS WE HAVE EXECUTED
                  A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE. WE ARE
                  ONLY WILLING TO MAKE THE WEBSITE AVAILABLE TO YOU IF YOU
                  ACCEPT ALL OF THESE TERMS. BY USING THE WEBSITE, APPS, SMART
                  CONTRACTS OR ANY PART OF THEM, YOU ARE CONFIRMING THAT YOU
                  UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS. IF YOU
                  ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER
                  LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY
                  TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE
                  "YOU" WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH
                  AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE
                  ARE UNWILLING TO MAKE THE PLATFORM, AVAILABLE TO YOU. IF YOU
                  DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                  WEBSITE OR THE SERVICES, APPS, OR SMART CONTRACTS.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>1.</B> INTERPRETATION
                </P>
                <P margin='0px 0px 0px 20px'>
                  <B>1.1.</B> Modifications: We reserve the right to change or
                  modify these Terms at any time and at our sole discretion. Any
                  changes to or modifications of these Terms will be in effect
                  as of the “Last Updated Date” referred to at the top of this
                  page. You should review these Terms before using any services.
                  Your continued access or participation in using the Services
                  after the modifications will be deemed as your acceptance of
                  the modified Terms.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>1.2.</B> Comprehensive Agreement: These Terms, along with
                  the{' '}
                  <A
                    href='https://push.org/privacy'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    Privacy Policy
                  </A>
                  outlined on the Website, or its related Apps constitute the
                  complete and exclusive Agreement between you and Push
                  pertaining to Your use of the Platform.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>1.3.</B> Headings: The headings and sub-headings in the
                  Terms are for ease of reference only and are not to be taken
                  into account in the construction or interpretation of any
                  provision or provisions to which they refer.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>1.4.</B> Extended meaning: Unless otherwise specified in
                  these Terms, words importing the singular include the plural
                  and vice versa and words importing gender include all genders.
                  The word “include”, “includes” or “including” will be
                  interpreted on an inclusive basis and be deemed to be followed
                  by the words “without limitation”.
                  <br />
                  <br />
                  The language in these Terms will be interpreted as to its fair
                  meaning, and not strictly for or against any party.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>2.</B> ABOUT THE PLATFORM
                </P>
                <P margin='0px 0px 0px 20px'>
                  <B>2.1.</B> Push Chain is a universal Layer 1 blockchain built
                  for all Web3 applications.It is designed to eliminate
                  fragmentation across blockchains and unify L1s, L2s, and L3s
                  for both developers and users.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>2.2.</B> Push Chain supports transactions from any chain
                  and implements cross-chain gas abstraction, allowing seamless
                  interaction without friction. It also offers wallet
                  abstraction for smooth onboarding—whether you're a seasoned
                  Web3 user or coming from Web2.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>2.3.</B> For developers, Push Chain introduces universal
                  smart contracts, enabling interaction from users on any chain
                  with apps deployed on Push. It supports shared state—allowing
                  smart contracts to read data from other chains—and
                  programmable solvers, enabling them to write to other chains.
                  This creates a frictionless developer experience and an ideal
                  environment for consumer and universal apps to thrive,
                  accessible to users across the entire Web3 ecosystem.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>3.</B> SERVICES
                </P>
                <P margin='0px 0px 0px 20px'>
                  We provide a suite of blockchain-based services (collectively,
                  the “Services”) designed to enable interoperability, asset
                  management, and decentralized interaction across multiple
                  blockchain networks. The Services currently include, but are
                  not limited to, the following components:
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>3.1. Components</B>

                  <P margin='10px 0px 0px 20px'>
                    <B>3.1.1. Blockchain:</B> Push Chain is a universal
                    blockchain network that enables users from other chains to
                    interact with smart contracts deployed on the Push Chain.
                    This interoperability facilitates cross-chain communication
                    and decentralized application (DApp) functionality across
                    multiple blockchain ecosystems.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>3.1.2. Wallet:</B> Push Chain provides an abstracted
                    wallet interface that allows users to connect their existing
                    digital wallets or access the Push Chain ecosystem through
                    social login or other authentication methods. This enables
                    seamless user interaction and transaction execution on Push
                    Chain.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>3.1.3. Digital Assets:</B> Push Chain issues and supports
                    a range of native and non-native digital assets
                    (collectively, “Push Digital Assets”). These include: The
                    native Push Chain cryptographic token (“<B>PC</B>”);
                    Soulbound NFTs; Collectibles; Tokens and other
                    blockchain-based assets. All Push Digital Assets are
                    provided without warranty of any kind, express or implied.
                  </P>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>3.2. Push Digital Tokens: </B>
                  The <B>PC token</B> is the native cryptographic token of the
                  Push Chain. Push Chain (like other blockchain networks)
                  requires the payment of transaction fees (“gas”) for the
                  execution of transactions or smart contracts. Gas fees are
                  typically paid in PCs by the sender or creator of a
                  transaction. PCs may also be used to pay transaction fees on
                  certain external blockchains that support Push
                  interoperability. Push Digital Assets, including PCs and any
                  other tokens, NFTs, or collectibles issued by us or our
                  affiliates, are intended solely for use within the Push Chain
                  ecosystem and for their stated functionality. They are not
                  intended as investments or securities, and no guarantee or
                  promise of future value, appreciation, or return is made. You
                  acknowledge and understand that:
                  <UList>
                    <LI>
                      The market value of Push Digital Assets may be highly
                      volatile and could decrease, including to zero, at any
                      time.
                    </LI>

                    <LI>
                      The secondary market for Push Digital Assets may be
                      illiquid, non-existent, or discontinued at any time.
                    </LI>

                    <LI>
                      If the value of PCs reduces to zero, it may become
                      impossible to use applications (“Apps”) on Push Chain for
                      cross-chain transactions or messaging.
                    </LI>

                    <LI>
                      Push Chain, its affiliates, and related entities shall
                      have <B>no liability</B> whatsoever for any loss,
                      depreciation, or devaluation of Push Digital Assets,
                      including total loss of value.
                    </LI>
                  </UList>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>3.3.</B> You understand and agree that:
                  <UList>
                    <LI>
                      Push Digital Assets are <B>not</B> intended to generate
                      profit, interest, dividends, or any other form of return.
                    </LI>

                    <LI>
                      Holding Push Digital Assets does <B>not</B> confer any
                      governance, voting, ownership, or similar rights in Push
                      Chain or any affiliated entities.
                    </LI>

                    <LI>
                      Any published roadmap, whitepaper, or forward-looking
                      statement does <B>not</B> constitute a commitment,
                      warranty, or promise of future value or services.
                    </LI>
                  </UList>
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>4.</B> SECURITY MEASURES
                </P>
                <P margin='0px 0px 0px 20px'>
                  <B>4.1.</B> A crucial security mechanism of the Push is the
                  randomized selection of validators for transaction validation
                  or block production. This mechanism leverages cryptographic
                  randomness to ensure an unpredictable selection of validators
                  & attestors to enhance the network's resilience and fairness.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>4.2.</B> To send a transaction to the network, the Software
                  Development Kit (SDK)/sender must attach a randomly generated
                  token number to the transaction. To fetch this token, the SDK
                  can request the same from any validator. Once received, the
                  SDK attaches this token to the transaction and sends it to the
                  network. The network then uses this random token to
                  cryptographically decide the specific validator to verify the
                  particular transaction for further processing. Additionally,
                  the validator also randomly decides the validator set
                  responsible for attesting to the transaction. Such are,
                  generation of Random Token, SDK Requests for Random Token, and
                  Randomized Selection of Validators
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>4.3.</B> Another crucial security mechanism used by the
                  Push is slashing which penalizes validators or participants
                  who act maliciously or fail to fulfill their responsibilities,
                  such as validating transactions correctly. When slashing
                  occurs, a portion of the participant's staked tokens is
                  forfeited and removed as a penalty, discouraging harmful
                  behavior and ensuring the integrity of the network.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>5.</B> INTELLECTUAL PROPERTY RIGHTS
                </P>
                <P margin='0px 0px 0px 20px'>
                  <B>5.1.</B> All rights, titles, and interests in and to the
                  Push, including but not limited to its copyrights, patents,
                  patent applications, copyright applications, trademark
                  applications, code, sources, data, information, software, user
                  interfaces, underlying algorithms, designs, graphics,
                  trademarks, service marks, logos, and any other proprietary
                  technology or content associated with the Services
                  (collectively, the "<B>Intellectual Property</B>") developed
                  or licensed or made for hire by , are and shall remain the
                  exclusive property of Push.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>5.2.</B> Subject to your compliance with these Terms, Push
                  grants You a limited, revocable, non-exclusive,
                  non-transferable, non-sublicensable license to access and use
                  the Push’s Intellectual Property solely for the purpose of
                  utilizing the Services provided by the Push in accordance with
                  this Agreement.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>5.3.</B> You shall not use the Push’s Intellectual Property
                  in any way that infringes upon the Intellectual Property
                  rights for any third party. Push reserves the right to suspend
                  or terminate Your access to Services if it determines that You
                  have violated this provision.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>5.4.</B> You shall not engage in any of the following
                  activities with respect to Push’s Intellectual Property:
                  <P margin='10px 0px 0px 20px'>
                    <B>5.4.1</B> Copy, reproduce, modify, adapt, translate, or
                    create derivative works of the Platform, its software, or
                    any other Intellectual Property without the prior written
                    consent of Push.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>5.4.2</B> Distribute, lease, sublicense, assign, sell,
                    rent, loan, or otherwise transfer the Platform or any part
                    thereof to any third party without the prior written consent
                    of Push.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>5.4.3</B> Reverse engineer, decompile, disassemble, or
                    otherwise attempt to derive the source code, algorithms, or
                    underlying technology of the Platform, except to the extent
                    such activities are expressly permitted by applicable law
                    notwithstanding this limitation.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>5.4.4</B> Access or use the Platform for any purpose
                    other than as expressly permitted under these Terms,
                    including any commercial use, data mining, scraping, or
                    similar activities intended to extract data from the
                    Services.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>5.4.5</B> Remove, alter, or obscure any copyright,
                    trademark, or other proprietary notices displayed in or on
                    the Services or related materials
                  </P>
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>6.</B> CONFIDENTIAL INFORMATION
                </P>
                <P margin='0px 0px 0px 20px'>
                  <B>6.1.</B> Personal Information sharing Liability: You
                  acknowledge and agree that if You choose to share any of Your
                  personal information with a third party, whether intentionally
                  or inadvertently, it is solely Your responsibility. We shall
                  not be liable for any loss, damages, or consequences arising
                  from such sharing of personal information.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>6.2.</B> Protection of Sensitive Personal Information: You
                  are responsible for protecting your own sensitive personal
                  information and ensuring its confidentiality. Sensitive
                  personal information includes but is not limited to:
                  <P margin='10px 0px 0px 20px'>
                    <B>6.2.1</B> Personally identifiable information such as
                    your name, address, email address, phone number, date of
                    birth, and social security number.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>6.2.2</B> Financial information such as bank account
                    details, credit card numbers, and financial transactions.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>6.2.3</B> Health information such as medical history,
                    treatment records, and health insurance information.
                  </P>
                  <P margin='10px 0px 0px 20px'>
                    <B>6.2.4</B> Any other information that may be considered
                    sensitive or confidential under applicable laws and
                    regulations.
                  </P>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>6.3.</B> You agree not to share Your sensitive personal
                  information with any third party without proper authorization
                  or consent. If You choose to share such information contrary
                  to this agreement, We shall not be liable for any loss,
                  damages, or platform consequences resulting from such
                  disclosure
                </P>

                <ItemV alignItems='flex-start'>
                  <P
                    fontWeight='400 !important'
                    letterSpacing='0.1em'
                    textTransform='uppercase'
                    fontSize='1.2em'
                  >
                    <B>7.</B> YOUR REPRESENTATIONS AND WARRANTIES
                  </P>
                  <P margin='0px 0px 0px 20px'>
                    You hereby represent and warrant to us as follows:
                  </P>
                </ItemV>

                <P margin='10px 0px 0px 20px'>
                  <B>7.1.</B> You are at least eighteen (18) years’ old, or the
                  age of majority in Your jurisdiction, whichever higher, (“
                  <B>Eligible Person</B>”) and have the full right, power, and
                  authority to enter into and comply with these Terms;
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.2.</B> You have the legal capacity to enter into
                  contracts under applicable laws and have read, understood, and
                  accepted these Terms.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.3.</B> You are not permitted to access the Platform if
                  You are not an Eligible Person or are acting on behalf of a
                  person who is not an Eligible Person and must disconnect Your
                  Wallet and any linked accounts, cease usage of and exit the
                  website immediately.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.4.</B> Entering into and performing your obligations
                  under these Terms does not and will not conflict with any
                  other agreement or obligation to which you are bound.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.4.</B> Entering into and performing your obligations
                  under these Terms does not and will not conflict with any
                  other agreement or obligation to which you are bound.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.5.</B> Your use of the Platform does not infringe on the
                  intellectual property rights or other rights of any third
                  party.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.6.</B> You will not introduce any viruses, worms,
                  malware, Trojan horses, or other harmful code to the Platform.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.7.</B> You will not misrepresent your affiliation with
                  any person or entity, including by impersonating another
                  person or entity.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>7.8.</B> You will not engage in any activity that is
                  illegal, fraudulent, or harmful to the Platform, its users, or
                  our reputation.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>8.</B> NO REPRESENTATIONS AND WARRANTIES
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.1.</B> We will not be liable for any delay or failure to
                  render the Services resulting from any Force Majeure Event.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.2.</B> You may access Our Platform at Your own risk. We
                  are not responsible or liable for any loss or damage
                  (including injuries, death, or loss of property) that You or
                  anyone else may suffer while accessing Our Platform.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.3.</B> You agree that Our Platform may contain
                  third-party advertisements and links to websites/services
                  owned and operated by Our affiliates and/ or third parties (“
                  <B>Third Party Content</B>”). We do not endorse the Third
                  Party Content or services of any third parties included on Our
                  platform. We cannot guarantee the accuracy, reliability or
                  quality of such Third Party Content. Your reliance on Third
                  Party Content is at Your own risk. Any claims that You have
                  regarding Third-Party Content should be directed to the third
                  party in question.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.4.</B> We will not be held responsible for any issues
                  with the storage, deletion, delivery, or accessibility of
                  information or materials to the extent allowed by law.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.5.</B> We do not provide any warranty for Our Content,
                  which is provided on an "as is, as available basis”.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.6.</B> We are not responsible for any errors or
                  inaccuracies in the team starting line-up data provided on Our
                  Platform, as it is obtained from external sources or publicly
                  available information.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.7.</B> We are not responsible for any inaccuracies in
                  calculating reward points or the selection of winners due to
                  inaccurate or incomplete information received from any
                  third-party service provider.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.8.</B> We make no representations or warranties regarding
                  the quality, suitability or merchantability of any prizes and
                  are not liable with respect to the same.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.9.</B> We will not be liable for your inability to access
                  Our Platform for any reason beyond our control such as network
                  outage, telecommunication failure, internet suspension, virus,
                  malware etc.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.10.</B> We are not responsible for any errors in
                  communication, or omissions in communication, including any
                  errors made by You, which may prevent the results from being
                  communicated to You.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>8.11.</B> We are not liable for any consequences arising
                  from You sharing any Confidential Information including but
                  not limited to OTP with any other person.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>9.</B> NO FIDUCIARY DUTIES
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>9.1.</B> This Agreement is not intended to, and does not,
                  establish or impose any fiduciary duties on Push . To the
                  maximum extent permitted by applicable law, You acknowledge
                  and agree that Push has no fiduciary duties or liabilities to
                  You or any other party. Any such duties or liabilities that
                  may be recognized at law or in equity are hereby explicitly
                  disclaimed, waived, and nullified by Push . You further
                  acknowledge and agree that Push 's only obligations to You are
                  those expressly outlined in this Agreement.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>9.2.</B> Professional Advice: All information provided in
                  connection with Your access and use of Push 's Services is
                  solely for informational purposes and should not be construed
                  as professional advice. Prior to making any financial, legal,
                  or other decisions based on the Services, You are strongly
                  encouraged to seek independent professional advice from a
                  licensed and qualified individual in the relevant area.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>9.3.</B> Tax Advice: Nothing contained herein constitutes
                  legal, financial, business, or tax advice. You are strongly
                  advised to consult with appropriate advisors before engaging
                  in any activities. All information provided by Push is for
                  informational purposes only and should not be construed as tax
                  advice.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>10.</B> THIRD PARTY LINKS
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>10.1.</B> If Push contains links to other sites and
                  resources provided by third parties, these links are provided
                  for Your convenience only. This includes links contained in
                  advertisements, such as banner advertisements and sponsored
                  links. You acknowledge and agree that Push is not responsible
                  or liable for: (i) the availability or accuracy of such
                  websites or resources; or (ii) the content, products, or
                  Services on or available from such websites or resources.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>10.2.</B> Links to such websites or resources do not imply
                  any endorsement by us of such websites or resources or the
                  content, products, or services available from such websites or
                  resources. You acknowledge sole responsibility for and assume
                  all risk arising from Your use of any such websites or
                  resources. If You access a third-party website or service or
                  share Your Content on or through any third-party website or
                  service, You do so at Your own risk, and You understand that
                  these Terms and the Privacy Policy do not apply to Your use of
                  such sites.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>11.</B> WARRANTIES AND DISCLAIMER
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>11.1.</B> THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS
                  AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER
                  EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, OR NON-INFRINGEMENT. Push DOES NOT WARRANT THAT THE
                  PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
                  OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>11.2.</B> YOU ACKNOWLEDGE THAT DATA YOU PROVIDE WHILE
                  ACCESSING OR USING THE SERVICES MAY BECOME IRRETRIEVABLY LOST
                  OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY OF
                  CAUSES, AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED UNDER
                  APPLICABLE LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE
                  CAUSED BY DENIAL-OF-SERVICE ATTACKS, SOFTWARE FAILURES,
                  VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIALS (INCLUDING
                  THOSE WHICH MAY INFECT YOUR COMPUTER EQUIPMENT), PROTOCOL
                  CHANGES BY THIRD-PARTY PROVIDERS, INTERNET OUTAGES, FORCE
                  MAJEURE EVENTS OR OTHER DISASTERS, SCHEDULED OR UNSCHEDULED
                  MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OF OUR
                  CONTROL.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>12.</B> PROHIBITED ACTIVITIES
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>12.1.</B> Cyberattack: Activities that seek to interfere
                  with or compromise the integrity, security, or proper
                  functioning of any computer, server, network, personal device,
                  or other IT system, including deploying viruses and
                  denial-of-service attacks.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>12.2.</B> Fraud and Misrepresentation: Activities that seek
                  to defraud us or any other person or entity, including
                  providing false, inaccurate, or misleading information to
                  unlawfully obtain property.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>12.3.</B> Market Manipulation: Activities that violate any
                  applicable law, rule, or regulation concerning the integrity
                  of trading markets, including manipulative tactics such as
                  “rug pulls,” pumping and dumping, and wash trading.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>13.</B> BREACH OF THESE TERMS
                </P>

                <P margin='10px 0px 0px 20px'>
                  In case of breach of these Terms or if We reasonably believe
                  that You have breached these Terms, We may choose to:
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>13.1.</B> Restrict, suspend, deactivate or permanently
                  delete Your account with Us (including all related information
                  that You might have provided to Us)
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>13.2.</B> Disqualify You from participating on our Website.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>13.3.</B> Refrain from awarding any prizes to You or
                  forfeit Your rewards.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>13.4.</B> Initiate appropriate civil/criminal proceedings
                  as We may consider appropriate in addition to forfeiture
                  and/or recovery of rewards.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>14.</B> LIMITATION OF LIABILITY
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>14.1.</B> You acknowledge and agree that you assume full
                  responsibility for your use of the Push Website and Services.
                  You acknowledge and agree that any information you send or
                  receive during your use of the Website and service may not be
                  secure and may be intercepted or later acquired by
                  unauthorized parties. You acknowledge and agree that your use
                  of the Website and the Service is at your own risk.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>14.2.</B> Recognizing such, you understand and agree that,
                  to the fullest extent permitted by applicable law, neither
                  Push nor any related entities, suppliers, or licensors will be
                  liable to you for any direct, indirect, incidental, special,
                  consequential, punitive, exemplary, or other damages of any
                  kind, including without limitation damages for loss of
                  profits, goodwill, use, data, or other tangible or intangible
                  losses or any other damages based on contract, tort, strict
                  liability, or any other theory (even if any of Push or related
                  entities had been advised of the possibility of such damages),
                  resulting from:
                  <UList>
                    <LI>The Website or Service;</LI>

                    <LI>Blockchain and the digital assets;</LI>

                    <LI>
                      The use or the inability to use the Website or Service;
                    </LI>

                    <LI>
                      Unauthorized access to or alteration of your transmissions
                      or data;
                    </LI>

                    <LI>
                      Statements or conduct of any third party on the Website or
                      Service;
                    </LI>

                    <LI>
                      Any actions we take or fail to take as a result of
                      communications you send to us; Human errors;
                    </LI>

                    <LI>Technical malfunctions;</LI>

                    <LI>
                      Failures, including public utility or telephone outages;
                    </LI>

                    <LI>
                      Omissions, interruptions, latency, deletions, or defects
                      of any device or network, providers, or software
                      (including, but not limited to, those that do not permit
                      participation in the service);
                    </LI>

                    <LI>Any injury or damage to computer equipment;</LI>

                    <LI>
                      Inability to fully access the website or service or any
                      other website;
                    </LI>

                    <LI>
                      Theft, tampering, destruction, or unauthorized access to,
                      images, or other content of any kind;
                    </LI>

                    <LI>
                      Data that is processed late or incorrectly or is
                      incomplete or lost;
                    </LI>

                    <LI>
                      Typographical, printing, or other errors, or any
                      combination thereof; Or any other matter relating to the
                      website or service.
                    </LI>
                  </UList>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>14.3.</B> In no event shall the total liability of Push for
                  all claims arising out of or relating to the Terms or the use
                  of or inability to use the Website or the Services exceed the
                  lower of USD 100 or the amount you paid to Push, if any, in
                  the past six months for the Services giving rise to the claim.
                  The currency of any such payment shall be determined at the
                  sole discretion of Push, and Push may, at its discretion,
                  discharge its liability (if any) through payment in digital
                  assets held by Push.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>14.4.</B> Some jurisdictions do not allow the exclusion of
                  certain warranties or the limitation or exclusion of liability
                  for incidental or consequential damages. Accordingly, some of
                  the above limitations may not apply to You.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>15.</B> INDEMNITY
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>15.1.</B> You agree to defend, indemnify, and hold harmless
                  us and our licensors, and each of their respective employees,
                  officers, directors, and representatives (collectively, the “
                  <B>Push Parties</B>”) from and against all liability for
                  monetary damages, contractual claims of any nature, economic
                  loss (including direct, incidental or consequential damages),
                  loss of income or profits, fines, penalties, exemplary or
                  punitive damages, and any other injury, damage, or harm,
                  including reasonable attorney’s fees (“<B>Damages</B>”) that
                  relate in any way to any demand, claim, regulatory action,
                  proceeding or lawsuit, regardless of the cause or alleged
                  cause, whether the allegations are groundless, fraudulent,
                  false, or lack merit and regardless of the theory of recovery
                  (“<B>Claim(s)</B>”) arising out of or relating to: (i) your
                  use of the Platform (including any use by your customers,
                  users, employees, and other personnel); (ii) breach of the
                  Terms or violation of applicable law by you, your customers,
                  users, employees and other personnel; (iii) a dispute between
                  you and any third party; (iv) your alleged or actual
                  infringement or misappropriation of any third party’s
                  intellectual property or other rights; and (v) your Feedback.
                  In the event we receive any third party subpoena or other
                  compulsory legal order or process associated with Claims
                  described in (i) through (v) above, then in addition to the
                  indemnification set forth above, you will reimburse us for our
                  employees’ and contractors’ time and materials spent
                  responding to such matters at our then-current hourly rates as
                  well as our reasonable attorneys’ fees.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>15.2.</B> If you are obligated to indemnify us, then you
                  agree that we will have the right, in our sole discretion, to
                  control any action or proceeding and to determine whether we
                  wish to settle, and if so, on what terms, and you agree to
                  fully cooperate with us in the defense or settlement of such
                  Claim.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>16.</B> RESTRICTION AND SUSPENSION
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>16.1.</B> We may restrict or suspend Your access to the
                  Platform, delete and any content or information or prohibit
                  You from using or accessing the Platform (or any portion,
                  aspect or feature of the Platform) if You violate these Terms,
                  effective immediately, which may result in the forfeiture and
                  destruction of all information associated with You and Your
                  activities in connection with the Platform. Any fees paid
                  hereunder are non-refundable. In the event of restriction, You
                  will still be bound by Your obligations under these Terms.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>16.2.</B> If You access or use Our Services from any
                  jurisdiction mentioned below or as amended from time to time,
                  it is solely your responsibility, and You agree to indemnify
                  and hold Us harmless from any loss, damages, or liabilities
                  incurred as a result of such use.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>16.3.</B> You agree to refrain from using our Services if
                  You are located in any of the restricted jurisdictions
                  mentioned below or as amended from time to time. By accessing
                  or using Our Services, You warrant that You are not located in
                  any such restricted jurisdiction and agree to comply with all
                  applicable laws and regulations.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>16.4. Effect of Suspension</B>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.4.1.</B> Your access to your account and its
                    associated functionalities, including transactions and
                    balances, will be temporarily disabled until the suspension
                    is resolved.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.4.2.</B> During the suspension, you will not be able
                    to initiate, complete, or access any transactions or
                    associated accounts.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.4.3.</B> Suspension does not absolve you of ongoing
                    obligations, such as fees, indemnification requirements, or
                    liabilities resulting from prior use of the Services.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.4.4.</B> We shall not be liable to you or any third
                    party for any suspension or related consequences, including
                    loss of data, assets, or other impacts.
                  </P>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>16.5. Effect of Termination</B>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.5.1.</B> All functionalities associated with your
                    account, including access to transactions, balances, and
                    information, will be permanently disabled.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.5.2.</B> Any remaining balances in your account at the
                    time of termination may be forfeited. We reserve the right
                    to restrict access to these balances without obligation for
                    return or compensation.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.5.3.</B> Termination does not relieve you of
                    obligations incurred prior to termination, such as
                    outstanding fees or liabilities.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.5.4.</B> You may terminate your use of the Services at
                    any time by discontinuing access. However, any obligations
                    or liabilities incurred prior to termination will remain
                    your responsibility.
                  </P>

                  <P margin='10px 0px 0px 20px'>
                    <B>16.5.5.</B> We shall not be liable to you or any third
                    party for termination-related consequences, including loss
                    of data, assets, or other impacts.
                  </P>
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>17.</B> RESTRICTED JURISDICTION
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>17.1.</B> We may refuse Services for following Users that
                  are citizens and residents (tax residency including as a
                  lawful permanent resident or other) of the Algeria, Bolivia,
                  Morocco, Nepal, Pakistan, Vietnam, Afghanistan, Ivory Coast,
                  Cuba, Iraq, Iran, Liberia, North Korea, Syria, Sudan, South
                  Sudan, Zimbabwe, Antigua, American Samoa, Guam, Northern
                  Mariana Islands, Puerto Rico, United States Minor Outlying
                  Islands, US Virgin Islands, Ukraine, Belarus, Albania, Burma,
                  Central African Republic, Democratic Republic of Congo, Lybia,
                  Somalia, Yemen, and Thailand. The list of restricted
                  jurisdictions may be amended from time to time depending on
                  the legal requirements of state authorities in such
                  territories and/or states.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>18.</B> GOVERNING LAW AND DISPUTE RESOLUTION
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>18.1.</B> Governing Law: The Terms – and your use of the
                  Platform– are governed by the laws of the Cayman Islands,
                  without regard to conflict of laws rules.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>18.2.</B> Negotiation: In the event of any dispute arising
                  out of or relating to this Agreement, the parties agree to
                  first attempt to resolve the dispute informally through
                  good-faith negotiation. Either party may initiate negotiations
                  by providing written notice via email to the other party,
                  clearly stating the nature of the dispute. If the dispute
                  cannot be resolved through negotiation within thirty (30) days
                  of the initiation of negotiations, the parties agree to submit
                  the dispute in court as mentioned above.
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>19.</B> GRIEVANCE REDRESSAL MECHANISMS
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>19.1.</B> If you have any complaints or grievances
                  regarding:
                  <UList>
                    <LI>
                      any User content that you believe violates the terms of
                      use;
                    </LI>
                    <LI>your access to the Push Platform; or</LI>
                    <LI>
                      any User content that You believe is, prima facie,
                      obscene, defamatory towards You or any other person, or
                      involves impersonation in an electronic form, including
                      artificially morphed images of individuals, please share
                      the same with Us by writing to{' '}
                      <A
                        href='https://support@push.org'
                        target='_blank'
                        display=' inline'
                        color='var(--ifm-link-color)'
                        background='transparent'
                        padding='0px'
                        letterSpacing='inherit'
                        textTransform='initial'
                      >
                        support@push.org
                      </A>
                    </LI>
                  </UList>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>19.2.</B> In your complaint or grievance, please include
                  the following information:
                  <UList>
                    <LI>
                      Your name, address, contact number, and email address;
                    </LI>
                    <LI>
                      Your relation to the subject matter of the complaint,
                      whether you are the complainant or acting on behalf of an
                      affected person;
                    </LI>
                    <LI>
                      The name and age of the person aggrieved or affected by
                      the subject matter of the complaint, if you are acting on
                      behalf of such person, and a statement, under penalty of
                      perjury, that you are authorized to act on behalf of such
                      person and to provide such person's personal information
                      to us in relation to the complaint/grievance;
                    </LI>
                    <LI>
                      Description of the complaint or grievance with clear
                      identification of the User content in relation to which
                      such complaint or grievance is made;
                    </LI>
                    <LI>
                      A statement that you believe that the User content
                      violates the terms of use;
                    </LI>
                    <LI>
                      A statement that the information provided in the complaint
                      or grievance is accurate.
                    </LI>
                  </UList>
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>19.3.</B> At times, we may need to verify your identity
                  before proceeding with the resolution of your complaint or
                  grievance. In such cases, we may request reasonable
                  identification or additional information to confirm your
                  identity and authority to submit the complaint.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>19.4.</B> For any further assistance or clarification, You
                  may contact Our Grievance Redressal Officer at {''}
                  <A
                    href='https://support@push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    support@push.org
                  </A>
                </P>

                <P
                  fontWeight='400 !important'
                  letterSpacing='0.1em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  <B>20.</B> MISCELLANEOUS
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.1.</B> Entire Agreement: These Terms, along with any
                  policies published by Push on the Platform, constitute the
                  entire agreement between You and Push , superseding any prior
                  agreements or arrangements regarding the Services.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.2.</B> Maintenance of Platform: Your access and use of
                  the Service may be occasionally interrupted for various
                  reasons, such as equipment malfunctions, periodic updates,
                  maintenance, or repairs initiated by Push . While we strive to
                  notify Users of such maintenance activities via the website
                  whenever feasible, please note that urgent maintenance may
                  occur without prior notice. During these maintenance periods,
                  temporary unavailability or reduced functionality of certain
                  features on the Platform may occur. Push endeavors to minimize
                  such interruptions and schedules maintenance during off-peak
                  usage hours whenever feasible. These maintenance efforts are
                  essential to ensure optimal performance, security, and
                  functionality of the Website.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.3.</B> Waiver: The failure of Push to enforce any right
                  or provision of these Terms shall not constitute a waiver of
                  such right or provision.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.4.</B> Severability: If any provision of these Terms is
                  found to be illegal, invalid, or unenforceable under any law,
                  such provision shall be deemed severable. The remaining
                  provisions shall remain in full force and effect, and shall
                  not be affected by the illegal, invalid, or unenforceable
                  provision or its severance.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.5.</B> Successor and Assigns: This Agreement shall be
                  binding upon and inure to the benefit of Push 's successors
                  and assigns. You may not assign this Agreement or any rights
                  or licenses granted hereunder without Push 's prior written
                  consent. Push reserves the right to assign this Agreement and
                  any granted rights to any person, firm, corporation, or
                  entity, without User consent.
                </P>
                <P margin='10px 0px 0px 20px'>
                  <B>20.6.</B> Relationship: These Terms do not create a joint
                  venture, partnership, employment, or agency relationship
                  between You and Push.
                </P>
                <P margin='10px 0px 0px 20px'>
                  <B>20.7.</B> Force Majeure: Push shall not be liable for any
                  delays, failures, or interruptions of Services resulting from
                  causes beyond its reasonable control, including, but not
                  limited to, acts of god, civil or military authorities,
                  terrorists, civil disturbances, strikes, fires,
                  telecommunication or Internet interruptions, equipment or
                  software failures, pandemics, or other catastrophic events.
                </P>
                <P margin='10px 0px 0px 20px'>
                  <B>20.8.</B> Construction: The rule of construction that a
                  contract should be interpreted against the party responsible
                  for its drafting shall not apply.
                </P>
                <P margin='10px 0px 0px 20px'>
                  <B>20.9.</B> Survival: Provisions that, by their nature,
                  should survive termination of these Terms, including payment
                  obligations, indemnity, disclaimers, limitations of liability,
                  intellectual property rights, applicable law, dispute
                  resolution, and miscellaneous provisions, shall survive
                  termination.
                </P>

                <P margin='10px 0px 0px 20px'>
                  <B>20.10.</B> Reporting: To report a vulnerability or security
                  concern regarding Our Services, please email {''}{' '}
                  <A
                    href='https://support@push.org'
                    target='_blank'
                    display=' inline'
                    color='var(--ifm-link-color)'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    support@push.org
                  </A>
                </P>
              </ItemH>
            </ItemH>
          </MultiContent>
        </BodyContent>
      </Section>
    </>
  );
};

const BodyContent = styled(Content)`
  & :where(p, li, a) {
    font-weight: 300;
    line-height: 170%;
  }

  /* Preserve bold text inside body content */
  & :where(p, li, a) :where(b, strong),
  & :where(p, li, a) ${B} {
    font-weight: 700;
    line-height: 170%;
  }
`;

const UList = styled(UL)`
  li {
    list-style: disc;
  }
`;
export default TosComp;
