// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import {
  A,
  B,
  Content,
  H3,
  HeroHeader,
  ItemH,
  ItemV,
  P,
  Section,
} from '@site/src/css/SharedStyling';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PrivacyMobile() {
  // Internationalization
  const { t } = useTranslation();

  return (
    <Layout
      title={PageMeta.PRIVACYFORMOBILE.pageTitle}
      description={PageMeta.PRIVACYFORMOBILE.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/privacymobile' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push Chain | Privacy' />
        <meta
          property='og:description'
          content='Our privacy policy page outlines how we protect your data and ensure your confidentiality. Learn about the measures we take to safeguard your information and maintain your trust.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/privacypreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:title' content='Push | Privacy' />
        <meta
          name='twitter:description'
          content='Our privacy policy page outlines how we protect your data and ensure your confidentiality. Learn about the measures we take to safeguard your information and maintain your trust.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/privacypreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'Any Chain. Any Wallet. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-chain',
            ],
          })}
        </script>
      </Head>

      <Section flexDirection='column' background='white !important'>
        <HeroSection background='#121315' minHeight='70vh'>
          <Content className='contentBox' flex='1'>
            <ItemV>
              <HeroHeader textAlign='center'>
                PRIVACY POLICY MOBILE APPS
              </HeroHeader>
              <P
                margin='20px 0 0 0'
                size='1.5rem'
                textAlign='center'
                color='#fff'
              >
                {t('privacy.hero.update-text')}
              </P>
              <H3
                maxWidth='400px'
                fontSize='1rem'
                margin='40px 0px 80px 0px'
                letterSpacing='0.1em'
                textTransform='uppercase'
                textAlign='center'
                color='#fff'
              >
                LAST UPDATED: 24TH SEPTEMBER 2022
              </H3>
            </ItemV>
          </Content>
        </HeroSection>

        <Section curve='bottom' data-bkg='light'>
          <Content className='contentBox'>
            <ItemH
              alignSelf='stretch'
              justifyContent='flex-start'
              flexDirection='column'
            >
              <ItemH
                alignItems='flex-start'
                margin='30px 0px 20px 0px'
                justifyContent='flex-start'
              >
                {/* SUMMARY */}
                <P
                  fontWeight='400'
                  letterSpacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  SUMMARY
                </P>
                <P margin='-10px 0px 0px'>
                  We recognise our responsibilities in relation to the
                  collection, holding, processing, use and/or transfer of
                  personal data. Your privacy is of utmost importance to us.
                </P>

                <P margin='20px 0px 0px 0px'>
                  This policy (the <B>Policy</B>) outlines how we collect, use,
                  store and disclose your personal data. Please take a moment to
                  read about how we collect, use and/or disclose your personal
                  data so that you know and understand the purposes for which we
                  may collect, use and/or disclose your personal data. By
                  accessing the website at{' '}
                  <A
                    href='https://push.org'
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    push.org
                  </A>
                  ,{' '}
                  <A
                    href='https://app.push.org'
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    app.push.org
                  </A>{' '}
                  or{' '}
                  <A
                    href='https://staging.push.org'
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    staging.push.org
                  </A>{' '}
                  or any other subdomains of <B>push.org</B> (the{' '}
                  <B>Website(s)</B>), you agree and consent to Ethereum Push
                  Notification Service Foundation (the <B>Company</B>), its
                  related corporations, business units and affiliates, as well
                  as their respective representatives and/or agents
                  (collectively referred to herein as “Push”, “us”, “we” or
                  “our”), collecting, using, disclosing and sharing amongst
                  themselves the personal data, and to disclosing such personal
                  data to relevant third party providers. This Policy
                  supplements but does not supersede nor replace any other
                  consent which you may have previously provided to us nor does
                  it affect any rights that we may have at law in connection
                  with the collection, use and/or disclosure of your personal
                  data. We may from time to time update this Policy to ensure
                  that this Policy is consistent with our future developments,
                  industry trends and/or any changes in legal or regulatory
                  requirements. Subject to your rights at law, the prevailing
                  terms of this Policy shall apply. For the avoidance of doubt,
                  this Policy forms part of the Terms of Service governing your
                  relationship with us and should be read in conjunction with
                  such{' '}
                  <A
                    href={useBaseUrl('./tos')}
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    Terms of Service
                  </A>
                  . All capitalised terms used but not defined herein shall have
                  the meaning ascribed to them in the Terms of Service.
                </P>

                <P margin='20px 0px 0px 0px'>
                  The security of your personal data is important to us. At each
                  stage of data collection, use and disclosure, Push has in
                  place physical, electronic, administrative and procedural
                  safeguards to protect the personal data stored with us.
                  However, do note that no transmission of personal data over
                  the internet can be guaranteed to be 100% secure – accordingly
                  and despite our efforts, Push cannot guarantee or warrant the
                  security of any information you transmit to us, or to or from
                  our online services. Push shall not have any responsibility or
                  liability for the security of information transmitted via the
                  internet.
                </P>

                <P>
                  This policy (the Policy) outlines how we collect, use, store
                  and disclose your personal data. Please take a moment to read
                  about how we collect, use and/or disclose your personal data
                  so that you know and understand the purposes for which we may
                  collect, use and/or disclose your personal data. By accessing
                  the &quot;Push&rdquo; application available on Google Play or
                  Apple App Store (the App), you agree and consent to Ethereum
                  Push Notification Service Foundation (the Company), its
                  related corporations, business units and affiliates, as well
                  as their respective representatives and/or agents
                  (collectively referred to herein as Push, us, we or our),
                  collecting, using, disclosing and sharing amongst themselves
                  the personal data, and to disclosing such personal data to
                  relevant third party providers. This Policy supplements but
                  does not supersede nor replace any other consent which you may
                  have previously provided to us nor does it affect any rights
                  that we may have at law in connection with the collection, use
                  and/or disclosure of your personal data. We may from time to
                  time update this Policy to ensure that this Policy is
                  consistent with our future developments, industry trends
                  and/or any changes in legal or regulatory requirements.
                  Subject to your rights at law, the prevailing terms of this
                  Policy shall apply. For the avoidance of doubt, this Policy
                  forms part of the terms and conditions governing your
                  relationship with us and should be read in conjunction with
                  such terms and conditions.
                </P>

                {/* What personal data is collected by Push */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  1 What personal data is collected by Push
                </P>
                <P margin='-10px 0px 0px 0px'>
                  &quot;Personal data&rdquo; means data, whether true or not,
                  about an individual who can be identified (i) from that data,
                  or (ii) from that data and other information to which the
                  organisation has or is likely to have access. Personal data
                  may be collected when you interact with our services or use
                  the App, or may be received by Push from third-party databases
                  or service providers that provide business information. For
                  example, Push may collect personal data such as particulars of
                  digital wallet addresses, transactions performed by said
                  digital wallet addresses, public cryptographic key relating to
                  digital wallet addresses on distributed ledger networks and/or
                  similar information.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  2 PERSONAL DATA AND THE BLOCKCHAIN
                </P>
                <P margin='-10px 0px 0px 0px'>
                  Blockchain technology, also known as distributed ledger
                  technology (DLT), is at the core of our business. Blockchains
                  are decentralized and made up of digitally recorded data in a
                  chain of packages called &quot;blocks&rdquo;. The manner in
                  which these blocks are linked is chronological, meaning that
                  the data is very difficult to alter once recorded. Since the
                  ledger may be distributed all over the world (across several
                  &quot;nodes&rdquo; which usually replicate the ledger) this
                  means there is no single person making decisions or otherwise
                  administering the system (such as an operator of a cloud
                  computing system), and that there is no centralized place
                  where it is located either.
                </P>

                <P margin='20px 0px 0px 0px'>
                  Accordingly, by design, a blockchain’s data cannot be changed
                  or deleted and is said to be &quot;immutable&rdquo;. This may
                  affect your ability to exercise your rights such as your right
                  to erasure (&quot;right to be forgotten&rdquo;), or your
                  rights to object or restrict processing of your personal data.
                  Data on the blockchain cannot be erased and cannot be changed.
                  Although smart contracts may be used to revoke certain access
                  rights, and some content may be made invisible to others, it
                  is not deleted.
                </P>

                <P margin='20px 0px 0px 0px'>
                  In certain circumstances, in order to comply with our
                  contractual obligations to you (such as delivery of tokens or
                  provision of other services) it will be necessary to collect
                  certain personal data, such as your wallet address, onto the
                  blockchain; this is done through a smart contract and requires
                  you to execute such transactions using your wallet’s private
                  key.
                </P>

                <P margin='20px 0px 0px 0px'>
                  The ultimate decisions to (a) transact on the blockchain using
                  your wallet address, as well as (b) share the public key
                  relating to your wallet address with anyone (including us)
                  rests with you.{' '}
                  <B>
                    IF YOU WANT TO ENSURE YOUR PRIVACY RIGHTS ARE NOT AFFECTED
                    IN ANY WAY, YOU SHOULD NOT TRANSACT ON BLOCKCHAINS AS
                    CERTAIN RIGHTS MAY NOT BE FULLY AVAILABLE OR EXERCISABLE BY
                    YOU OR US DUE TO THE TECHNOLOGICAL INFRASTRUCTURE OF THE
                    BLOCKCHAIN. IN PARTICULAR THE BLOCKCHAIN IS AVAILABLE TO THE
                    PUBLIC AND ANY PERSONAL DATA SHARED ON THE BLOCKCHAIN WILL
                    BECOME PUBLICLY AVAILABLE.
                  </B>
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  3 PURPOSES FOR COLLECTION, USE AND DISCLOSURE OF YOUR PERSONAL
                  DATA
                </P>

                <P margin='0px 0px 0px 0px'>
                  Push may collect, use and/or disclose your personal data for
                  its legitimate interests or business purposes, including
                  operations for these purposes. These may include, without
                  limitation, the following:
                </P>

                <ListGroup>
                  <P margin='20px 0px 0px 20px'>
                    <B>(a)</B> developing and providing facilities, products or
                    services (whether made available by us or through us),
                    including but not limited to:
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(i)</B> services for sending of push-notifications,
                    information updates, notices or correspondence;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(ii)</B> acting as intermediaries through any blockchain,
                    network or platform;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(iii)</B> recording and/or encryption on any blockchain,
                    network or platform;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(iv)</B> promoting advertisements or marketing material,
                    whether from us or third parties;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(v)</B> various products and/or services (whether digital
                    or not, and whether provided through an external service
                    provider or otherwise);
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(vi)</B> making payments for participation in any
                    blockchain, network or platform developed or managed by us
                    (as applicable);
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(vii)</B> carrying out research, planning and statistical
                    analysis;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(viii)</B> trouble-shooting, technical maintenance and
                    bug fixes; and/or
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(ix)</B> analytics for the purposes of developing or
                    improving our products, services, security, service quality,
                    staff training, and advertising strategies;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(b)</B> communicating with you, including providing you
                    with updates on changes to services or products (whether
                    made available by us or through us) including any additions,
                    expansions, suspensions and replacements of or to such
                    services or products and their terms and conditions;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(c)</B> managing our infrastructure and business
                    operations and complying with internal policies and
                    procedures;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(d)</B> responding to queries, feedback or complaint;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(e)</B> complying with all applicable laws, regulations,
                    rules, directives, orders, instructions and requests from
                    any local or foreign authorities, including regulatory,
                    governmental, tax and law enforcement authorities or other
                    authorities;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(f)</B> enabling any actual or proposed assignee or
                    transferee, participant or sub-participant of Push&apos;s
                    rights or obligations to evaluate any proposed transaction;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(g)</B> enforcing obligations owed to us, protecting our
                    rights or property, and protecting against legal liability;
                    and/or
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(h)</B> seeking professional advice, including legal or
                    tax advice.
                  </P>

                  <P>
                    We may also use personal data for purposes set out in the
                    terms and conditions that govern our relationship with you
                    or our customer.
                  </P>
                </ListGroup>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  4 USE OF PERSONAL DATA FOR MARKETING PURPOSES
                </P>

                <P margin='0px 0px 0px 0px'>
                  We may use your personal data to offer you products or
                  services, including special offers, promotions, contests or
                  entitlements that may be of interest to you or for which you
                  may be eligible. Such marketing messages may be sent to you in
                  various modes including but not limited to electronic mail,
                  direct mailers, short message service, telephone calls,
                  facsimile and other mobile messaging services. In doing so, we
                  will comply with all applicable data protection and privacy
                  laws.
                </P>

                <P margin='0px 0px 0px 0px'>
                  In respect of sending telemarketing messages to your telephone
                  number via short message service, telephone calls, facsimile
                  and other mobile messaging services, please be assured that we
                  shall only do so if we have your clear and unambiguous consent
                  in writing or other recorded form to do so or if you have not
                  otherwise made the appropriate registration of that number
                  with the Do Not Call Registry. If we have an ongoing
                  relationship with you and you have not indicated to us that
                  you do not wish to receive telemarketing messages sent to your
                  telephone number, we may send you telemarketing messages to
                  that number related to the subject of our ongoing relationship
                  via short message service, facsimile and other mobile
                  messaging services (other than a voice or video call).
                </P>

                <P margin='20px 0px 0px 0px'>
                  You may at any time request that we stop contacting you for
                  marketing purposes via selected or all modes.
                </P>

                <P margin='20px 0px 0px 0px'>
                  To find out more on how you can change the way we use your
                  personal data for marketing purposes, please contact us.
                </P>

                <P margin='20px 0px 20px 0px'>
                  Nothing in this Policy shall vary or supersede the terms and
                  conditions that govern our relationship with you.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  5 DISCLOSURE AND SHARING OF PERSONAL DATA
                </P>

                <P margin='0px 0px 0px 0px'>
                  We may from time to time and in compliance with all applicable
                  laws on data privacy, disclose your personal data to any
                  personnel of Push, group entities, or to third parties
                  (including without limitation banks, financial institutions,
                  credit card companies, credit bureaus and their respective
                  service providers, companies providing services relating to
                  insurance and/or reinsurance to us, and associations of
                  insurance companies, agents, contractors or third party
                  service providers who provide services to us such as
                  telecommunications, information technology, payment, data
                  processing, storage and archival, and our professional
                  advisers such as our auditors and lawyers, and regulators and
                  authorities), located in any jurisdiction, in order to carry
                  out the purposes set out above. Please be assured that when we
                  disclose your personal data to such parties, we will disclose
                  only the personal information that is necessary to deliver the
                  service required, and will also require them to ensure that
                  any personal data disclosed to them are kept confidential and
                  secure.
                </P>

                <P margin='20px 0px 0px 0px'>
                  For more information about the third parties with whom we
                  share your personal data, you may, where appropriate, wish to
                  refer to the agreement(s) and/or terms and conditions that
                  govern our relationship with you or our customer. You may also
                  contact us for more information (please see section 11 below).
                </P>

                <P margin='20px 0px 0px 0px'>
                  We wish to emphasise that Push does not sell personal data to
                  any third parties and we shall remain fully compliant of any
                  duty or obligation of confidentiality imposed on us under the
                  applicable agreement(s) and/or terms and conditions that
                  govern our relationship with you or our customer or any
                  applicable law.
                </P>

                <P margin='20px 0px 0px 0px'>
                  You are responsible for ensuring that the personal data you
                  provide to us is accurate, complete, and not misleading and
                  that such personal data is kept up to date. You acknowledge
                  that failure on your part to do so may result in our inability
                  to provide you with the products and services you have
                  requested. To update your personal data, please contact us
                  (please see section 11 below for contact details). Where you
                  provide us with personal data concerning individuals other
                  than yourself, you are responsible for obtaining all legally
                  required consents from the concerned individuals and you shall
                  retain proof of such consent(s), such proof to be provided to
                  us upon our request.
                </P>

                <P margin='20px 0px 20px 0px'>
                  We may transfer, store, process and/or deal with your personal
                  data in any jurisdiction, and accordingly such personal data
                  may be transferred to computers, servers or hardware located
                  outside of your state, province, country or other governmental
                  jurisdiction where the data protection laws may differ from
                  those in your jurisdiction. Push will take all steps
                  reasonably necessary to ensure that your data is treated
                  securely and in accordance with this Policy and no transfer of
                  your personal data will take place to an organisation or a
                  country unless there are adequate controls in place including
                  the security of your data and other personal information
                  (including without limitation the Standard Contractual Clauses
                  approved by the European Commission). Your consent to this
                  Policy followed by your submission of such information
                  represents your agreement to the transfer of personal data as
                  described herein.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  6 COOKIES/TOKENS AND RELATED TECHNOLOGIES
                </P>

                <P margin='0px 0px 0px 0px'>
                  The App uses tokens to store a user&apos;s credentials for
                  interacting with the App. A token is a small encrypted file
                  placed on your computer or mobile device which may include an
                  anonymous unique identifier and certain information about your
                  use of the App, such as their Internet protocol (IP) address,
                  browser information, computer or device type, operating
                  system, internet service provider, App usage, date/time stamp,
                  and functions as your credentials for accessing the App. We
                  use tokens, cookies and other technologies to facilitate your
                  internet sessions and use of the App, offer you customised
                  products and/or services according to your preferred settings,
                  display features and services which might be of interest to
                  you (including ads on our services), track usage of the App,
                  to compile statistics about activities carried out on the App,
                  and to hold certain information.
                </P>

                <P margin='20px 0px 0px 0px'>
                  You may set up your web browser to block or remove tokens
                  stored from your computer or mobile device. However, if you do
                  so, you may not be able to use certain features and functions
                  of the App.
                </P>

                <P margin='20px 0px 20px 0px'>
                  Tokens will also be deleted when you uninstall the App from
                  your computer or mobile device.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  7 RETENTION OF PERSONAL DATA
                </P>

                <P margin='0px 0px 0px 0px'>
                  Your personal data is retained as long as the purpose for
                  which it was collected remains and until it is no longer
                  necessary for any legal or business purposes. This enables us
                  to comply with legal and regulatory requirements or use it
                  where we need to for our legitimate purposes, such as
                  transfers of digital assets, and dealing with any disputes or
                  concerns that may arise.
                </P>

                <P margin='20px 0px 0px 0px'>
                  We may need to retain information for a longer period where we
                  need the information to comply with regulatory or legal
                  requirements or where we may need it for our legitimate
                  purposes (e.g. to help us respond to queries or complaints,
                  fighting fraud and financial crime, responding to requests
                  from regulators etc).
                </P>

                <P margin='20px 0px 20px 0px'>
                  When we no longer need to use personal data, we will remove it
                  from our systems and records and/or take steps to anonymise it
                  so that you can no longer be identified from it.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  8 QUERIES, ACCESS/CORRECTION REQUESTS AND WITHDRAWAL OF
                  CONSENT
                </P>

                <ListGroup>
                  <P margin='0px 0px 0px 0px'>If you:</P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(a)</B> have queries about our data protection processes
                    and practices;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(b)</B> wish to request access to and/or make corrections
                    to your personal data in our possession or under our
                    control; or
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(c)</B> wish to withdraw your consent to our collection,
                    use or disclosure of your personal data,
                  </P>

                  <P margin='20px 0px 0px 0px'>
                    Please submit a written request (with supporting documents,
                    (if any) to our Compliance Officer at:{' '}
                    <A
                      href='mailto://support@epns.io'
                      display=' inline'
                      color='#e1087f'
                      background='transparent'
                      padding='0px'
                      letterSpacing='inherit'
                      textTransform='initial'
                    >
                      support@epns.io
                    </A>
                    . Our Data Protection Officer shall respond to you within 30
                    days of your submission. Please note that if you withdraw
                    your consent to any or all use or disclosure of your
                    personal data, depending on the nature of your request, we
                    may not be in a position to continue to provide our services
                    or products to you or administer any contractual
                    relationship in place. Such withdrawal may also result in
                    the termination of any agreement you may have with us. Our
                    legal rights and remedies are expressly reserved in such
                    event.
                  </P>

                  <P margin='20px 0px 0px 0px'>
                    We may charge you a fee for processing your request for
                    access. Such a fee depends on the nature and complexity of
                    your access request. Information on the processing fee will
                    be made available to you.
                  </P>
                </ListGroup>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  9 CONTACT INFORMATION
                </P>

                <P margin='0px 0px 0px 0px'>
                  To contact us on any aspect of this Policy or your personal
                  data or to provide any feedback that you may have, please
                  contact our Data Protection Officer at{' '}
                  <A
                    href='mailto://support@epns.io'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    support@epns.io
                  </A>
                  .
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  10 GOVERNING LAW AND JURISDICTION
                </P>

                <P margin='0px 0px 0px 0px'>
                  This Policy and your use of the Website shall be governed and
                  construed in accordance with the laws of Singapore. You agree
                  to submit to the exclusive jurisdiction of the Singapore
                  courts.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  11 AMENDMENTS AND UPDATES TO PUSH PRIVACY POLICY
                </P>

                <P margin='0px 0px 0px 0px'>
                  We reserve the right to amend this Policy from time to time to
                  ensure that this Policy is consistent with any developments to
                  the way Push uses your personal data or any changes to the
                  laws and regulations applicable to Push. We will make
                  available the updated Policy on the App. You are encouraged to
                  visit the App from time to time to ensure that you are well
                  informed of our latest policies in relation to personal data
                  protection. All communications, transactions and dealings with
                  us shall be subject to the latest version of this Policy in
                  force at the time.
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  12 FOR EUROPEAN UNION OR EUROPEAN ECONOMIC AREA RESIDENTS
                </P>

                <P margin='0px 0px 0px 0px'>
                  This section 12 applies if you are an individual located in
                  the European Union or European Economic Area. Subject to
                  applicable law, you have the following additional rights in
                  relation to your personal data:
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(a)</B> the right to access your personal data (if you ask
                  us, we will confirm whether we are processing your personal
                  data in a structured, commonly used and machine-readable
                  format and, if so, provide you with a copy of that personal
                  data (along with certain other details). If you require
                  additional copies, we may need to charge a reasonable fee;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(b)</B> the right to ensure the accuracy of your personal
                  data;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(c)</B> the right to have us delete your personal data (we
                  will do so in some circumstances, such as where we no longer
                  need it, but do note that we may not delete your data when
                  other interests outweigh your right to deletion);
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(d)</B> rights in relation to automated decision-making and
                  profiling (you have the right to be free from decisions based
                  solely on automated processing of your personal data,
                  including profiling, that affect you, unless such processing
                  is necessary for entering into, or the performance of, a
                  contract between you and us or you provide your explicit
                  consent to such processing);
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(e)</B> the right to restrict further processing of your
                  personal data (unless we demonstrate compelling legitimate
                  grounds for the processing);
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(f)</B> the right to withdraw consent (if we rely on your
                  consent to process your personal data, you have the right to
                  withdraw that consent at any time, but provided always that
                  this shall not affect the lawfulness of processing based on
                  your prior consent); and
                </P>

                <P margin='20px 0px 20px 20px'>
                  <B>(g)</B> the right to complain to a supervisory authority in
                  your country of residence in the event that data is misused.
                </P>

                <P margin='0px 0px 20px 0px'>
                  If you believe that our processing of your personal
                  information infringes data protection laws, you have a legal
                  right to lodge a complaint with a supervisory authority
                  responsible for data protection. You may do so in the EU
                  member state of your residence, your place of work or the
                  place of the alleged infringement. You may exercise any of
                  your rights in relation to your personal data by contacting
                  our Compliance Officer at:{' '}
                  <A
                    href='mailto://support@epns.io'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    support@epns.io
                  </A>
                  .
                </P>

                <P
                  weight='400'
                  spacing='0.2em'
                  color='#000'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  13 YOUR ACCEPTANCE OF THESE TERMS
                </P>

                <P margin='0px 0px 0px 0px'>
                  This Policy applies in conjunction with any other notices,
                  contractual clauses and consent clauses that apply in relation
                  to the collection, use and disclosure of your personal data by
                  us. We may revise this Policy from time to time without any
                  prior notice. You may determine if any such revision has taken
                  place by referring to the date on which this Policy was last
                  updated.
                </P>

                <P margin='20px 0px 0px 0px'>
                  By using the App and/or any services provided by Push, you
                  signify your acceptance of this Policy and terms of service.
                  If you do not agree to this Policy or terms of service, please
                  do not use the App or any services provided by Push. Your
                  continued use of the App following the posting of changes to
                  this Policy will be deemed your acceptance of those changes.
                </P>
              </ItemH>
            </ItemH>
          </Content>
        </Section>
      </Section>
    </Layout>
  );
}

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled(Section)`
  border-radius: 0 0 48px 48px;
`;

export default PrivacyMobile;
