---
layout: page
title: Responsible Disclosure Policy
description:
lang: it
ref: security
permalink: /security.html
---

As **[PagoPA S.p.A.](https://www.pagopa.gov.it/)**, we consider the security of our projects a top priority. But no matter how much effort we put into security, there can still be vulnerabilities present. If you discover a vulnerability in one of the projects directly developed by us, we would like to know about it so we can take steps to address it as quickly as possible, while protecting. We would like to ask you to help us better protect our users and their data.

This policy describes how to send us vulnerability reports and how we ask security researchers to behave when disclosing vulnerabilities. Your personal data will be processed based on your consent and in accordance with our [privacy policy](https://www.pagopa.gov.it/it/privacy-policy/).

If you are the first to report a verifiable major security issue, we'll thank you with a place in our _hall of fame page_!

## Report a vulnerability

E-mail your findings to [security@pagopa.it](mailto:security@pagopa.it). You can encrypt your findings using our [PGP key](https://www.pagopa.gov.it/publickey.txt) to prevent critical information from falling in the wrong hands.

Give adequate information to reproduce the vulnerability, so we will be able to understand and resolve it as quickly as possible. In particular please include at least the following information:

- type of vulnerability;
- service or URL or IPs affected;
- requirements to reproduce the issue;
- information necessary to reproduce the issue;
- impact of the vulnerability together with an explanation of how an attacker could find it and exploit it.

## Guidelines

- Do not take advantage of the vulnerability or problem you have discovered.
- Do not perform any activity that can damage us or our users, disrupt the impacted system or service or cause any data leakage/loss. If you are unsure a test can cause harm to our systems, take a conservative approach and email your concerns directly, without doing any active testing.
- Respect the privacy of our users: you are not allowed to acquire or use any personal data for purposes other than identify a weakness in our systems, with the ultimate goal of protecting them and their data and in full accordance with this policy.
- Keep confidential any information about discovered vulnerabilities for up to 90 calendar days after you have notified pagoPA, unless mutually agreed otherwise.
- Do not place a backdoor in a system. By placing a backdoor in a system, that system becomes even more insecure.
- Do not make changes to the system or application.
- Do not use Denial Of Service attacks or brute force access (no password guessing).
- Do not use aggressive automated scanning.
- Do not use social engineering of our employees or contractors (no phishing).
- Reports about TLS ciphers, email spam, potential volumetric attacks, missing web security headers and "best practices" in general will **NOT** be considered as valid submissions, **unless** you are able to craft another exploit that leverages the lack of such headers or such misconfigurations.

## What we promise

- We will respond to a valid submission within 7 business days with our evaluation of the report and an expected resolution date.
- If you have followed the instructions above, we will not take any legal action against you concerning the report.
- We will not pass on your personal details to third parties without your permission, unless it is necessary to comply with a legal obligation. Reporting under a pseudonym or anonymous is also possible.
- We will keep you informed of the progress towards resolving the problem.
- For major issues, ranked so at our discretion, we can mention (if you desire) your name or pseudonym as the discoverer of the vulnerability in our _hall of fame_. Links to personal websites are not allowed.
- As of now, **we do NOT offer bounties** for valid submissions.

## Scope

This policy applies to the following projects directly developed or maintained by pagoPA:

- IO - any subdomain of, including [https://io.italia.it/](https://io.italia.it/)
- pagoPA - any subdomain of, including [https://pagopa.gov.it/](https://pagopa.gov.it/)

## Hall Of Fame

- We would like to publicly thank research Anurag Kumar Rawat (Mr. Venom) for reporting a XSS vulnerability in one of our subdomains.

Thank you for helping keep pagoPA and our users safe!

We reserve the right to update this Responsible Disclosure Policy at any time.
