// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Component
import {
  A,
  B,
  Content,
  H1,
  H2,
  ItemV,
  MultiContent,
  P,
  Section,
  Span,
} from '@site/src/css/SharedStyling';

const PrivacyComp = () => {
  // Internationalization
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <Section>
        <BodyContent className='skeletonsmall'>
          <MultiContent>
            <H1>{t('pages.privacy.hero-section.title')}</H1>
            <Span>{t('pages.privacy.hero-section.description')}</Span>
            <Span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              Last Updated on: 25th October 2025
            </Span>
          </MultiContent>

          <MultiContent>
            <ItemV
              alignSelf='stretch'
              alignItems='flex-start'
              justifyContent='flex-start'
              flexDirection='column'
            >
              <Span margin='12px 0'>
                We value and respect your right to privacy, and to this end are
                committed to protecting your personal data provided to us
                directly or indirectly. This Privacy Policy sets out our
                commitment and explains in detail what information we may gather
                from your visit to our{' '}
                <A
                  href='https://push.org/'
                  target='_blank'
                  display=' inline'
                  color='var(--ifm-link-color)'
                  background='transparent'
                  padding='0px'
                  letterSpacing='inherit'
                  textTransform='initial'
                >
                  https://push.org/
                </A>{' '}
                including{' '}
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
                , or other subdomains of push (the <B>Website</B> or{' '}
                <B>Platform</B>) and, why and how your personal data may be
                processed when you use our Services.
              </Span>
              <Span margin='12px 0'>
                This Policy (the <B>Policy</B>) outlines how we collect, use,
                store and disclose your ("you", "your", "user") Personal Data.
                By accessing the Website, you agree and consent to Push Labs
                Ltd., (the <B>Company</B>), its related corporations, business
                units and affiliates, as well as their respective
                representatives and/or agents (collectively referred to herein
                as Push, (<B>"us", "we", or "our"</B>)), collecting, using,
                disclosing and sharing amongst themselves the personal data, and
                to disclosing such personal data to relevant third-party
                providers. This Policy supplements but does not supersede nor
                replace any other consent which you may have previously provided
                to us nor does it affect any rights that we may have at law in
                connection with the collection, use and/or disclosure of your
                personal data. We may from time to time update this Policy to
                ensure that this Policy is consistent with our future
                developments, industry trends and/or any changes in legal or
                regulatory requirements. Subject to your rights at law, the
                prevailing terms of this Policy shall apply. For the avoidance
                of doubt, this Policy forms part of the terms and conditions
                governing your relationship with us and should be read in
                conjunction with such terms and conditions.
              </Span>
              <Span margin='12px 0'>
                The terms of this Policy are applicable to you for accessing our
                various Services as detailed in our 'Terms of Services' document
                that can be accessed through the Website and is available at{' '}
                <A
                  href={useBaseUrl('./tos')}
                  target='_blank'
                  display=' inline'
                  color='var(--ifm-link-color)'
                  background='transparent'
                  padding='0px'
                  letterSpacing='inherit'
                  textTransform='initial'
                >
                  Terms of Service
                </A>
                .
              </Span>
              <Span margin='12px 0'>
                This Policy describes how Push may collect, use, disclose,
                process and manage your personal data, and applies to any
                individual’s personal data which is in our possession or under
                our control. The capitalized terms not defined in this Privacy
                Policy shall have the meanings defined in Terms of Service.
              </Span>

              <H2 margin='12px 0'>1. Introduction</H2>
              <Span>
                Push Chain is a shared state blockchain for shared app
                experiences. It is a Proof of Stake (PoS) chain built to allow
                developers to create Universal Apps and act as a shared
                settlement layer for multiple layer 1, layer 2 and layer 3. It
                allows transactions from any chain, uses gas abstraction to
                ensure no hassle for interaction from other chains and provides
                wallet abstraction for seamless onboarding and signing for
                existing users. To summarize, it is a shared-state blockchain
                that eliminates fragmentation and makes apps universal. <br />
                Deploy once on Push. Users on any chain — EVM or non-EVM — use
                your app with their existing wallets and tokens; fees are
                handled under the hood.
              </Span>

              {/* What personal data is collected by Push? */}
              <H2 margin='12px 0'>
                2. What personal data is collected by Push?
              </H2>
              <Span margin='12px 0'>
                <B>2.1.</B> “Personal data” means data, whether true or not,
                about an individual who can be identified (i) from that data, or
                (ii) other information to which Push has or is likely to have
                access. Some examples of Personal Data that Push may collect
                are:
              </Span>
              <ListGroup>
                <Span margin='6px 0'>
                  <B>2.2.</B> Information you provide to us directly
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.2.1.</B> personal particulars for account (e.g., name,
                  contact details, residential address, date of birth, identity
                  card/passport details,);
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.2.3.</B> images and voice recordings of our conversations
                  with you,;
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.2.4.</B> information about your use of our Services and
                  Website;
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.1.4.</B> financial details (e.g., account numbers and
                  banking transactions private or public cryptographic key
                  relating to addresses on distributed ledger networks and/or
                  similar information); and/or
                </Span>
                <Span margin='6px 0'>
                  <B>2.3.</B> Your use of Platform and other Services
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.3.1.</B> personal opinions made known to us (e.g.,
                  feedback or responses to surveys).
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.3.2.</B> correspondence data which is provided directly
                  to us via email, social media or another channel.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.3.3.</B> other transaction information and details
                  associated with your activities on our Services, including to
                  deliver you your rewards associated with your use of the
                  Services
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>2.3.</B> We may post job openings and opportunities on our
                  Website. If you reply to one of these postings by submitting
                  your application, CV and/or cover letter to us, we will
                  collect and use this information to assess your
                  qualifications.
                </Span>
              </ListGroup>

              <Span margin='12px 0'>
                <B>2.4.</B> Personal data may be collected when you interact
                with our services or use the Website, or may be received by Push
                from third-party databases or service providers that provide
                business information.
              </Span>

              {/* Purpose of Collection of Data */}
              <H2 margin='12px 0'>3. Purpose of Collection of Data</H2>
              <Span margin='12px 0'>
                <B>3.1.</B> At Push, we prioritize the privacy, security, and
                transparency of the user’s data. By using Push platform and
                services, you agree to allow us to collect, store, process, and
                use data related to your activities on our systems. The purpose
                of collection your Personal Data shall assist Push in:
              </Span>
              <P margin='0px'>
                <B>3.2.</B> Provide our Services
              </P>
              <ListGroup>
                <Span margin='6px 0 6px 20px'>
                  <B>3.2.1.</B> Managing your information
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.2.2.</B> Providing access to certain areas,
                  functionalities, and features of our Services
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.2.3.</B> Communicating with you about your activities on
                  our Services, terms of service and Policy changes
                </Span>
              </ListGroup>

              <P margin='10px 0px 0px 0px'>
                <B>3.3.</B> Administrative Purpose
              </P>
              <ListGroup>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.1.</B> Enhancing your experience on our platform.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.2.</B> Develop new products and service
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.3.</B> Conducting research and surveys
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.4.</B> Auditing relating to interactions, transfers and
                  other compliance activities
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.5.</B> Improving the functionality, reliability, and
                  efficiency of our services.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.6.</B> Conducting analytics and research.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.7.</B> Facilitating marketing, promotional efforts, and
                  service updates.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.8.</B> Ensuring compliance with legal and regulatory
                  obligations.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.9.</B> Ensuring internal quality control and safety.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.10.</B> Other uses as required to comply with our legal
                  obligations.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>3.3.11.</B> Sharing information with third parties as
                  needed to provide the Services
                </Span>
              </ListGroup>

              <Span margin='12px 0'>
                <B>3.4.</B> Marketing and Advertising our Services: We may use
                personal information to tailor and provide you with content and
                advertisements. We may provide you with these materials as
                permitted by applicable law. Some of the ways we may market to
                you include email campaigns, custom audiences advertising, and
                “interest-based” or “personalized advertising,” including
                through cross-device tracking. If you have any questions about
                our marketing practices or if you would like to opt out of the
                use of your personal information for marketing purposes, you may
                contact us at any time as set forth in “Contact Us” below.
              </Span>

              <P margin='6px 0 6px 20px'>
                <B>3.4.1.</B> Security purpose
                <P margin='6px 0 6px 20px'>
                  <B>3.4.1.1</B> We may use personal information for fraud and
                  security purposes, such as monitoring to detect and prevent
                  cyberattacks or identity theft attempts.
                </P>
                <P margin='6px 0 6px 20px'>
                  <B>3.4.1.1</B> Prevention of criminal activity or harm to
                  users, such as illegal or harmful content being posted on our
                  Platform and/or reward board.
                </P>
              </P>

              <P margin='6px 0px 6px 20px'>
                <B>3.4.2.</B> Business transactions
                <P margin='6px 0 6px 20px'>
                  <B>3.4.2.1.</B> In connection with a reorganization, merger,
                  sale, joint venture, assignment, transfer, or other
                  disposition of all or any portion of our business, assets, or
                  stock (including in connection with any bankruptcy or similar
                  proceedings). You will be notified of any such business
                  transaction and possible changes to the processing of your
                  personal information in accordance with applicable law.
                </P>
              </P>

              {/* Disclosure of Personal Data */}
              <H2 margin='12px 0'>4. Disclosure of Personal Data</H2>
              <Span margin='12px 0'>
                <B>4.1.</B> For the provision of the Services and as set out
                under Clause 4, you understand and accept that we may disclose
                your Personal Data to:
              </Span>
              <ListGroup>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.1</B> our employees, contractors and/or related
                  entities,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.2</B> our existing or potential agents or business
                  partners,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.3.</B> sponsors or promoters of any competition we run,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.4.</B> anyone to whom our business or assets are, or
                  may be, transferred,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.5.</B> credit reporting agencies, courts, tribunals and
                  regulatory authorities, in the event you fail to pay for goods
                  or services we have provided to you,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.6.</B> courts, tribunals, regulatory authorities and
                  law enforcement officers, as required by law, or in order to
                  establish, exercise or defend our legal rights;
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.7.</B> third parties, including agents or
                  sub-contractors, who assist us in providing information,
                  products, services or direct marketing to you,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.8.</B> third parties to collect and process data, such
                  as Google Analytics or other relevant businesses,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.9.</B> operate and maintain the security or integrity
                  of the Services, including to prevent or stop an attack on our
                  computer systems or networks,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.10.</B> protect the rights, interests, or property of
                  our or third parties,
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>4.1.11.</B> prevent or investigate possible wrongdoing in
                  connection with the Services, or enforce our Terms of Services
                </Span>
              </ListGroup>

              {/* International Data Transfer */}
              <H2 margin='12px 0'>5. International Data Transfer</H2>
              <Span margin='12px 0'>
                <B>5.1.</B> Upon your consent, all information processed by us
                transferred, processed, and stored anywhere in the world,
                including, but not limited to, the United States or other
                countries, which may have data protection laws that are
                different from the laws where you live. We endeavour to
                safeguard your information consistent with the requirements of
                applicable laws.
              </Span>

              {/* Sensitive Personal Information (SPI) */}
              <H2 margin='12px 0'>6. Sensitive Personal Information (SPI)</H2>
              <Span margin='12px 0'>
                <B>6.1.</B> SPI is Personal Data consisting of racial or ethnic
                origin, political opinions, religious or philosophical beliefs,
                trade union membership, genetic data, biometric data, data
                concerning health or data concerning a natural person's sex life
                or sexual orientation. SPI may only be used and disclosed for
                purposes for which the SPI was collected, as permitted by the
                provider of the SPI and if required by law.
              </Span>

              {/* Biometric Information */}
              <H2 margin='12px 0'>7. Biometric Information</H2>
              <Span margin='12px 0'>
                <B>7.1.</B> Please note that the Company does not collect,
                access, or store any biometric information of users. In certain
                cases, depending on how you use our Services, your device’s
                biometric authentication may be used to facilitate secure login
                or encryption processes. Any biometric data used for such
                purposes is processed and stored locally on your device through
                your device’s native authentication mechanisms and is never
                transmitted to or retained by the Company. In limited
                circumstances, a non-personal, encrypted identifier derived from
                your biometric data may be stored solely for the purpose of
                enabling secure access or authentication. This encrypted
                identifier cannot be reverse-engineered or used to identify you
                personally. The Company does not share, sell, or disclose any
                such encrypted identifiers or biometric-related information to
                any third parties.
              </Span>

              {/* Information Automatically Collected */}
              <H2 margin='12px 0'>8. Information Automatically Collected</H2>
              <Span margin='12px 0'>
                <B>8.1.</B> We automatically collect certain types of usage
                information when you visit our Website or use our Service. When
                you visit the Service, we may send one or more cookies a small
                text file containing a string of alphanumeric characters to your
                computer that uniquely identifies your browser and lets us help
                you log in faster and enhance your navigation through the site.
                A cookie may also convey information to us about how you use the
                Service (e.g., the pages you view, the links you click and other
                actions you take on the Service), and allow us to track your
                usage of the Service over time. We may collect log file
                information from your browser or mobile device each time you
                access the Service. Log file information may include anonymous
                information such as your web request, Internet Protocol ("
                <B>IP</B>") address, browser type, identity of your internet
                service provider, information about your mobile device,
                referring / exit pages and URLs, the number and duration of page
                views, number of clicks and how you interact with links on the
                Service, domain names, landing pages, and other such
                information.
              </Span>
              <Span margin='12px 0'>
                <B>8.2.</B> When you access our Website through a mobile device,
                we may receive or collect and store a unique identification
                number associated with your device and other device information.
                We may also employ clear gifs (also known as web beacons) which
                are used to anonymously track the online usage patterns of our
                Users. In addition, we may also use clear gifs in HTML-based
                emails sent to our users to track which emails are opened and
                which links are clicked by recipients. The information allows
                for more accurate reporting and improvement of the Service. We
                may also collect analytics data, or use third-party analytics
                tools, to help us measure traffic and usage trends for the
                Service. These tools collect information sent by your browser or
                mobile device, including the pages you visit, your use of
                third-party applications, and other information that assists us
                in analysing and improving the Service.
              </Span>

              {/* Cookies */}
              <H2 margin='12px 0'>9. The Website uses cookies.</H2>
              <Span margin='12px 0'>
                <B>9.1.</B> A cookie is a small text file placed on your
                computer or mobile device when you visit a Website or use an
                app. Cookies collect information about users and their visit to
                the Website or use of the app, such as their Internet protocol
                (IP) address, how they arrived at the Website (for example,
                through a search engine or a link from another Website), how
                they navigate within the Website or app, browser information,
                computer or device type, operating system, internet service
                provider, Website usage, referring/exit pages, platform type,
                date/time stamp, number of clicks, and ads viewed. We use
                cookies and other technologies to facilitate your internet
                sessions and use of our apps, offer you products and/or services
                according to your preferred settings, track use of our Website
                and apps and to compile statistics about activities carried out
                on our Website.
              </Span>
              <Span margin='12px 0'>
                <B>9.2.</B> You may set up your web browser to block cookies
                from monitoring your Website visit. You may also remove cookies
                stored from your computer or mobile device. However, if you do
                block cookies you may not be able to use certain features and
                functions of our web sites.
              </Span>

              {/* Data Security */}
              <H2 margin='12px 0'>10. Data Security</H2>
              <Span margin='12px 0'>
                <B>10.1.</B> We employ a variety of measures to safeguard the
                collection, transmission, and storage of the information we
                collect. These measures vary based on the sensitivity of the
                information that we collect, process, and store, and the current
                state of technology. All data is hosted on third-party servers
                as decided by the Company. We employ industry standard data
                security practices to keep your personal information safe from
                cyber-attacks and threats. Without prejudice to the inherent
                risk of sharing and accessing data over the internet, we will
                use appropriate security measures (organizational and technical)
                to prevent your Personal Data from being accidentally lost,
                used, damaged, or accessed in an unauthorised or unlawful way,
                altered, or disclosed. Please note that no system can be
                guaranteed to be 100% secure. In addition, we will allow access
                to your Personal Data only to those employees, agents,
                contractors and other third parties who have a legitimate
                business need to know and are subject to a duty of
                confidentiality. Despite the fact that we have implemented
                appropriate security measures, we cannot guarantee that the
                Personal Data we collect will not be shared/disclosed in a way
                that is inconsistent with this Privacy Policy. Where we have
                given you (or where you have chosen) a credential which enables
                you to access certain parts of our Platform, you are responsible
                for keeping this password confidential. We ask you not to share
                a credential with anyone. We have internal policies to respond
                to personal information breaches and will notify you and
                applicable regulators as required by law.
              </Span>
              <Span margin='12px 0'>
                <B>10.2.</B> If you have reason to believe that your interaction
                with us is no longer secure, please immediately notify us in
                accordance with the Contact Details section below.
              </Span>

              {/* Data Retention */}
              <H2 margin='12px 0'>11. Data Retention</H2>
              <Span margin='12px 0'>
                <B>11.1.</B> We will retain your Personal Data if you are using
                the Services, have an account with us or required for the
                purpose provided in this Privacy Policy. Further, we may retain
                Personal Data for an additional period permitted or required
                under applicable laws, for legal, tax, or regulatory reasons, or
                for legitimate and lawful business purposes.
              </Span>
              <Span margin='12px 0'>
                <B>11.2.</B> The criteria to determine our retention periods
                include:
              </Span>
              <Span margin='6px 0 6px 20px'>
                <B>11.2.1.</B> The length of time we have an ongoing
                relationship with you and provide the Services to you (for
                example, for as long as you have an account with us or keep
                using the Services);
              </Span>
              <Span margin='6px 0 6px 20px'>
                <B>11.2.2.</B> Whether there is a legal obligation to which we
                are subject (for example, certain laws require us to keep
                records of your transactions for a certain period of time before
                we can delete them); or
              </Span>
              <Span margin='6px 0 6px 20px'>
                <B>11.2.3.</B> Whether retention is advisable in light of our
                legal position (such as in regard to applicable statutes of
                limitations, litigation or regulatory investigations)
              </Span>
              <P margin='6px 0 6px 20px'>
                <B>11.2.4.</B> Where a legal obligation arises or retention is
                advisable in light of our legal position, in some circumstances,
                we will retain certain Personal Information, even after your
                account has been deleted and/or we no longer provide the
                Services to you; for example:
                <P margin='6px 0 6px 20px'>
                  <B>11.2.4.1.</B> To cooperate with law enforcement or public,
                  regulatory and government authorities: If we receive a
                  preservation order or search warrant, related to your Services
                  or account, we will preserve personal information subject to
                  such order or warrant after you delete your Services or
                  account.
                </P>
                <P margin='6px 0 6px 20px'>
                  <B>11.2.4.2.</B> To comply with legal provisions on tax and
                  accounting: We may retain your personal information, such as
                  name, email address, account information, after you delete
                  your account, as required by tax law and to comply with
                  bookkeeping requirements. Please note the length of time may
                  vary by country.
                </P>
                <P margin='6px 0 6px 20px'>
                  <B>11.2.4.3.</B> For fraud and security purposes: We may
                  retain your personal information for fraud or security
                  purposes. In the event you have acted fraudulently through the
                  use of the Services) we may retain Name and email details,
                  account information, and IP address.
                </P>
              </P>

              <Span margin='6px 0'>
                <B>11.3.</B> To pursue or defend a legal action: We may retain
                relevant personal information in the event of a legal claim or
                complaint, including regulatory investigations or legal
                proceedings about a claim related to your personal information,
                or if we reasonably believe there is a prospect of litigation
                (whether in respect of our relationship with you or otherwise)
                after the dispute has been settled or decided by a court or
                tribunal from which there is no further right of appeal. The
                criteria for determining the length of time we will retain this
                information include: a. whether there is a legal obligation to
                which we are subject (for example, if the settlement or decision
                requires us to keep the records for a certain period of time
                before we can delete them); or b. whether retention is advisable
                in light of our legal position (such as in regard to applicable
                statutes of limitations, litigation or regulatory
                investigations).
              </Span>

              {/* Your Rights */}
              <H2 margin='12px 0'>12. Your Rights</H2>
              <Span margin='12px 0'>
                This Privacy Policy grants you certain rights with respect to
                your Personal Data as set out below:
              </Span>
              <Span margin='6px 0'>
                <B>12.1. Right to Consent:</B> By using our Services and/or
                providing your Personal Data, you agree to allow us to collect,
                hold, use, and disclose such data in accordance with this
                Privacy Policy. You have the right not to consent/provide us any
                such data, however, if you do so, we may not be able to provide
                you with the Services, or the products and/or services offered
                through the Platform.
              </Span>
              <Span margin='6px 0'>
                <B>12.2. Access:</B> You have the right to request details of
                your Personal Data from us.
              </Span>
              <Span margin='6px 0'>
                <B>12.3. Data Erasure:</B> You can request for deletion of your
                Personal Data. However, if such data is required for the
                provision of the Services, you may be required to delete your
                profile and/or may not be able to use our Services.
              </Span>
              <Span margin='6px 0'>
                <B>12.4. Correction:</B> If you believe any Personal Data held
                by us is inaccurate, out of date, incomplete, irrelevant, or
                misleading, please contact us to correct such information, or
                update the same via your account, if allowed.
              </Span>
              <Span margin='6px 0'>
                <B>12.5. Concerns and Queries:</B> If you have any concerns and
                queries on how we process, handle, and keep your Personal Data,
                please contact us with full details of your concerns and
                queries. We will take appropriate steps to address them.
              </Span>
              <Span margin='6px 0'>
                <B>12.6. Object and Restriction to processing:</B> Subject to
                data processing such as profiling, You may upon giving written
                notice to withdraw your consent to collect, use or disclose your
                personal data. Upon receipt of such withdrawal request, the
                Company shall, within thirty (30) days or within a reasonable
                period thereafter, make reasonable efforts to cease the
                collection, use, and disclosure of your personal data, however,
                if you do so, we may not be able to provide you with the
                Services, or the products and/or services offered through the
                Platform.
              </Span>
              <Span margin='6px 0'>
                <B>12.7. Data Portability:</B> You may obtain your personal data
                in a structured, machine readable format for transfer to another
                service.
              </Span>
              <Span margin='6px 0'>
                <B>12.8. Right to Lodge a Complaint:</B> You may lodge a
                complaint with the respective data protection authority for your
                country or region where you have your habitual residence or
                place of work or where an alleged infringement of applicable
                data protection law occurs.
              </Span>

              {/* Additional Rights - GDPR */}
              <H2 margin='12px 0'>13. Additional Rights</H2>
              <Span margin='12px 0'>
                <B>13.1.</B>
                General Data Protection Regulation (GDPR) Data Protection
                Rights: The Company invites you to be fully aware of all your
                personal data protection rights if you are a resident where the
                GDPR is applicable. Every such user is entitled to the
                following:
              </Span>
              <ListGroup>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.1</B> The right to access: The user has the right to
                  request copies of your personal data. The Company may charge
                  additional costs for the same.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.2.</B> The right to rectification: The user has the
                  right to request that we correct any information you believe
                  is inaccurate. The user additionally has the right to request
                  that we complete the information the user believes is
                  incomplete.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.3.</B> The right to erasure: The user has the right to
                  request that the Company erases your personal data, under
                  certain circumstances.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.4.</B> The right to restrict processing: The user has
                  the right to request that the Company restricts the processing
                  of your personal data, under certain circumstances.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.5.</B> The right to object to processing: The user has
                  the right to object to the Company’s processing of your
                  personal data, under certain circumstances.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.6.</B> The right to data portability: The user has the
                  right to request that the Company transfers the data that the
                  Company has collected to another Company/ organization, or
                  directly to you, under certain circumstances.
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>13.1.7.</B> If the GDPR is applicable to you, you may make
                  a request, and the Company will endeavour to respond to you
                  within the timeline as per applicable law.
                </Span>
              </ListGroup>

              {/* Queries, Access/Correction Requests and Withdrawal of Consent */}
              <H2 margin='12px 0'>
                14. Queries, Access/Correction Requests and Withdrawal of
                Consent
              </H2>
              <Span margin='12px 0'>
                <B>14.1.</B> If you:
              </Span>
              <ListGroup>
                <Span margin='6px 0 6px 20px'>
                  <B>14.1.1.</B> have queries about our data protection
                  processes and practices;
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>14.1.2.</B> wish to request access to and/or make
                  corrections to your personal data in our possession or under
                  our control; or
                </Span>
                <Span margin='6px 0 6px 20px'>
                  <B>14.1.3.</B> wish to withdraw your consent to our
                  collection, use or disclosure of your personal data,
                </Span>
              </ListGroup>
              <Span margin='12px 0'>
                <B>14.2.</B> Please submit a written request (with supporting
                documents, (if any) to our Compliance Officer at:{' '}
                <A
                  href='mailto://support@push.org'
                  display=' inline'
                  color='var(--ifm-link-color)'
                  background='transparent'
                  padding='0px'
                  letterSpacing='inherit'
                  textTransform='initial'
                >
                  support@push.org
                </A>
                . Our Compliance Officer shall endeavour to respond to you
                within 30 days of your submission. As part of our response
                process, we may conduct a basic background verification to
                confirm that the requester is a genuine user and to determine
                whether any breach, misuse, or unauthorised disclosure of
                personal data has occurred. This verification is carried out
                solely for security and compliance purposes. Please note that if
                you withdraw your consent to any or all use or disclosure of
                your personal data, depending on the nature of your request, we
                may not be in a position to continue to provide our services or
                products to you or administer any contractual relationship in
                place. Such withdrawal may also result in the termination of any
                agreement you may have with us. Our legal rights and remedies
                are expressly reserved in such an event.
              </Span>
              <Span margin='12px 0'>
                <B>14.3.</B> We may charge you a fee for processing your request
                for access. Such a fee depends on the nature and complexity of
                your access request. Information on the processing fee will be
                made available to you.
              </Span>

              {/* Links to Other Sites */}
              <H2 margin='12px 0'>15. Links to Other Sites</H2>
              <Span margin='12px 0'>
                <B>15.1.</B> The Platform may contain links to other Websites.
                Those Websites are not governed by this Privacy Policy. Clicking
                on those links or enabling those connections may allow third
                parties to collect or share data about you. Please read the
                Privacy Policy and Terms and Conditions of such Websites before
                using such Websites. We have no control over and shall not be
                responsible for the content, privacy policies or practices of
                any third-party sites or services.
              </Span>

              {/* Changes to our Privacy Policy */}
              <H2 margin='12px 0'>16. Changes to our Privacy Policy</H2>
              <Span margin='12px 0'>
                <B>16.1.</B> We reserve the right to update this Privacy Policy
                at any time and at our sole discretion. Any changes to or
                modifications of this Privacy Policy shall be in effect as of
                the “Last Updated Date” referred to at the top of this page. We
                will notify you of such changes prominently either by posting a
                notice of such changes before they take effect, or by sending
                you a notification directly. The amended Privacy Policy is
                effective once we notify you of the change. We encourage you to
                periodically review this Privacy Policy.
              </Span>

              {/* Minor */}
              <H2 margin='12px 0'>17. Minor</H2>
              <Span margin='12px 0'>
                <B>17.1.</B> As provided in our Terms of Service, our Service is
                not intended for anyone under the age of 18 (eighteen) years or
                minor under the law of the country where the Services are
                accessed (“<B>Minor</B>”). We do not intend to or knowingly
                collect any Personal Data related to a Minor. If you believe
                that Personal Data of any minor has been collected or provided
                to us, please contact us.
              </Span>

              {/* Contact Details */}
              <H2 margin='12px 0'>18. Contact Details</H2>
              <Span margin='12px 0'>
                <B>18.1.</B> For queries on any aspect of this Privacy Policy or
                to provide any feedback please contact our office at:{' '}
                <A
                  href='mailto://support@push.org'
                  display=' inline'
                  color='var(--ifm-link-color)'
                  background='transparent'
                  padding='0px'
                  letterSpacing='inherit'
                  textTransform='initial'
                >
                  support@push.org
                </A>
              </Span>
            </ItemV>
          </MultiContent>
        </BodyContent>
      </Section>
    </>
  );
};

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyContent = styled(Content)`
  & :where(p, li, a, span) {
    font-weight: 300;
    line-height: 170%;
  }

  & :where(p, li, a, span) :where(b, strong),
  & :where(p, li, a, span) ${B} {
    font-weight: 700;
    line-height: 170%;
  }
`;

export default PrivacyComp;
