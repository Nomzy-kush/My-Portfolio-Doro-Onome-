One of the largest wallet safe breaches in Web3 history occurred on February 21, 2025, between 12:00 and 14:00 UTC, when Bybit experienced a catastrophic security breach that resulted in the loss of nearly $1.4 billion in assets. Attackers exploited flaws in operational security procedures that primarily affected key management and privileged access, rather than the logic of the smart contract. People felt the ripple effects immediately. Institutions, protocols, and DAOs with billions in total value locked started to reevaluate the security assumptions that underpin their infrastructure.

This incident shook the entire Web3 ecosystem as people soon realized that this wallet hack could have happened to any protocol. They compromised Bybit's multi-sig wallet through a combination of social engineering and poor internal controls. The breach didn't just highlight technical vulnerabilities. It revealed deeper, system-wide flaws in how protocols design, run, and govern their core systems.

This article is a call to action for the builders, maintainers, and operators behind today's Web3 protocols, especially those managing environments that handle millions or even billions in user and protocol funds. This isn't a guide for end users. It's a blueprint for founders, engineering leads, and security architects who carry the responsibility of securing an entire ecosystem.

## What is Web3 operational security (OpSec)?
------------------------------------------

Web3 Operational Security (OpSec) refers to the strategies, tools, and processes that security engineers put in place to protect decentralized systems and infrastructure from exploitation, manipulation, or compromise. They built Web3 OpSec around decentralization, self-custody, and trustless environments, unlike traditional cybersecurity that often relies on centralized authority and access control.

## How Web3 OpSec differs from traditional Cybersecurity
-----------------------------------------------------

Traditional cybersecurity typically operates within a centralized framework. Engineers manage access through corporate directories, and they enforce security policies from the top down. Security measures like VPNs, firewalls, and perimeter defenses are common.

On the other hand, decentralized Web3 systems have no perimeter, so every participant becomes a potential target. Users bear full responsibility for private key security through self-custody, which gives them more control. Since smart contracts are immutable, engineers cannot patch mistakes on the fly. Permissionless environments demand new methods for authentication and validation.

This paradigm shift requires engineers to fundamentally rethink security, from infrastructure to user behavior.

## Unique Security Challenges in Web3 Environments
-----------------------------------------------

### 1.  Self-Custody of Keys

In Web3, users and organizations manage their own private keys. If they lose or compromise these keys, their assets become unrecoverable. Unlike traditional systems with centralized password resets or support teams, there is no fallback in most decentralized systems. This raises the stakes for every transaction and access point.

### 2\. Smart Contract Immutability

Engineers cannot modify smart contracts without deliberate mechanisms like upgradable proxies once they have been deployed. A single overlooked bug can lock or drain millions. This makes pre-deployment audits, formal verification, and ongoing monitoring non-negotiable for OpSec teams.

### 3\. Permissionless Architecture

Anyone can interact with Web3 protocols. This openness is a double-edged sword because while it drives innovation and inclusivity, it also opens the door to bots, malicious actors, and front-running attacks. OpSec in this context means building guardrails without compromising decentralization with techniques like transaction simulation, mempool surveillance, and smart rate limiting.

### 4\. DAO Governance Attack Vectors

Decentralized Autonomous Organizations (DAOs) rely on token holders for governance, but attackers can exploit voting mechanisms to manipulate decisions.

They can exploit low voter turnout, sybil attacks, or flash loan-based governance takeovers to push malicious proposals. Strong OpSec practices include quorum thresholds, multisig enforcement on treasury actions, and off-chain signaling to reduce alteration.

## The Bybit Wallet Safe Hack
--------------------------

On February 21, 2025, Bybit suffered a significant security breach, which resulted in the theft of approximately 400,000 Ethereum tokens, valued at around $1.5 billion. The attack exploited vulnerabilities in Bybit's cold wallet infrastructure, marking the largest cryptocurrency theft to date.

Investigations revealed that the breach was orchestrated by North Korea's Lazarus Group, a state-sponsored hacking organization known for targeting centralized crypto exchanges. The attackers employed a sophisticated phishing campaign to compromise a developer's machine associated with Safe{Wallet}, the multisig wallet provider that Bybit uses.

![Bybit](https://miro.medium.com/v2/resize:fit:800/1*T5F-F8B9BsVD5Yj_fTAW2Q.jpeg)

### How attackers bypassed existing controls
----------------------------------------

The attackers executed a multi-faceted strategy to bypass Bybit's security measures:

-   The attackers gained access to the AWS S3 bucket that hosted the Safe{Wallet} UI, which compromised a Safe{Wallet} developer's machine.
-   They injected malicious JavaScript into the Safe{Wallet} UI, which remained dormant until Bybit employees accessed it.
-   The compromised UI presented transaction data that looked legitimate enough to deceive Bybit's multisig signers and CEO Ben Zhou to approve a transaction that replaced the wallet's smart contract with a malicious one.
-   The malicious contract included functions that allowed the attackers to transfer funds without the necessary multisig approval, which effectively drained the wallet.

### Primary Vulnerabilities Exploited
---------------------------------

The breach exploited several key vulnerabilities:

1.  The Safe{Wallet} UI, hosted on a centralized AWS S3 bucket, became a single point of failure.
2.  The lack of independent verification for transaction data allowed the malicious UI to deceive signers.
3.  The ability to replace the wallet's smart contract without triggering alarms indicated insufficient safeguards against unauthorized contract changes.
4.  The attackers' access to a developer's machine underlines the risks associated with credential management and endpoint security.

### Damages done
------------

The Bybit Wallet Safe hack led to the largest crypto theft in history. Attackers stole around $1.5 billion in Ethereum-based assets, which shocked the entire ecosystem. The breach triggered mass panic, with users rushing to withdraw funds. This caused a sharp dip in Ethereum's price and exposed how fragile investor confidence remains.

Bybit's reputation took a major blow. The scale of the breach revealed deep security flaws, which forced regulators to call for tighter oversight and stricter compliance across the crypto industry.

### The hack by numbers
-------------------

On-chain data shows the attackers executed six key transactions:

One transaction granted them full access to all tokens.

1.  They first made a small $90 test transfer, which is quite common for North Korean-style hacks.


![](https://miro.medium.com/v2/resize:fit:1400/0*DT56KEkWlDJN5V7l.png)

[*Source*](https://www.youtube.com/watch?v=Gf8_ovO-jBI&t=114s)

2. Then they took approximately 400,000 ETH (around $1.1 billion)


![](https://miro.medium.com/v2/resize:fit:1400/0*Vl41hVoLFN4eKfWk.png)

[*Source*](https://www.youtube.com/watch?v=Gf8_ovO-jBI&t=114s)

3. Next, they stole 8,000 mETH (roughly $22 million)


![](https://miro.medium.com/v2/resize:fit:1400/0*Ffc82EgAD5ZTmYAl.png)

[*Source*](https://www.youtube.com/watch?v=Gf8_ovO-jBI&t=114s)

4. The next one was around 240 million stETH taken (estimated $250 million)


![](https://miro.medium.com/v2/resize:fit:1400/0*GzvVxjuh1P01SamT.png)

[*Source*](https://www.youtube.com/watch?v=Gf8_ovO-jBI&t=114s)

5. Lastly, they drained 15000 cmETH (roughly $42 million)


![](https://miro.medium.com/v2/resize:fit:1400/0*gNXeIv5dfeOBofnA.png)

[*Source*](https://www.youtube.com/watch?v=Gf8_ovO-jBI&t=114s)

## Bybit's Post-Incident Response
------------------------------

Bybit responded quickly after the breach. Within hours, the team moved most funds out of the compromised Safe Wallet addresses. This helped prevent further losses and signaled immediate containment efforts.

Bybit secured emergency funding from Galaxy Digital, FalconX, and Wintermute to stabilize operations. These partners helped replenish reserves within 72 hours.

CEO Ben Zhou addressed the situation directly. He confirmed the breach but reassured users that client assets remained safe and the breach didn't affect withdrawals. In his words:

*"Bybit remains steadfast in our commitment to security and transparency. The preliminary forensic review finds that our system was not compromised. While this incident underscores the evolving threats in the crypto space, we are taking proactive steps to reinforce security and ensure the highest level of protection for our users."*


![](https://miro.medium.com/v2/resize:fit:1400/0*Fr3IAdXf_J9pWCks.png)

[*Source*](https://www.bloomberg.com/news/newsletters/2025-02-25/blockchain-sleuths-chase-almost-1-5-billion-stolen-from-bybit)

Bybit emphasized that the hackers didn't breach the core infrastructure. Forensics teams concluded that the attack did not compromise internal systems. The company also started to evaluate alternative wallet solutions that offer stronger security for custody operations.

To strengthen future defenses, Bybit partnered with cybersecurity firms and law enforcement to trace the stolen assets and investigate the breach. It also started to update its operational security protocols and collaborate with top security experts to enhance protections across the platform.

Bybit stated clearly: "*Ensuring the safety and security of our users remains our top priority.*"

## Infrastructure Design for Secure Web3 Operations
------------------------------------------------

Designing a resilient and secure Web3 infrastructure requires a layered approach that safeguards digital assets, enforces access control, and ensures operational continuity.

## Simple principles to build more secure wallets
----------------------------------------------

### Use Hot and Cold Wallets
-   Hot wallets connect to the internet and support real-time transactions, but they are more vulnerable to attacks. On the other hand, cold wallets remain offline and are ideal when you want to store long-term or high-value assets. A secure infrastructure uses a mix of wallet types. It keeps hot wallets for day-to-day transactions, and cold wallets will be used to store long-term treasury funds. Bybit stored high-value assets in a cold wallet that wasn't properly protected. This mistake shows why critical wallets must stay isolated from everyday network access.
### Multi-Signature and MPC Wallets
-   Multi-signature (multisig) wallets require multiple private key approvals before they can execute a transaction. Ideally, this is supposed to limit the impact of a single compromised signer, but the Bybit attack shows us that compromised frontends can deceive signers. Organizations should pair multisig with secure UI verification tools.
-   Multiparty Computation (MPC) wallets boost security by splitting key generation and signing across multiple parties. No single party ever sees the full private key. Techniques like threshold signing and Shamir Secret Sharing ensure that only a set number of trusted signers can approve a transaction. This setup makes unauthorized access extremely difficult.
### Role-Based Wallet Segregation
-   Segment wallets by operational roles to reduce the blast radius of any breach. Isolate treasury wallets and ensure they require the highest level of authentication. Payout wallets should operate under limited withdrawal ceilings. Operational wallets can stay hot, but they must be closely monitored at all times. Using role-based segregation makes sure that if one system gets hacked, the attacker can't reach all the funds.


![Simple principles to build more secure wallets](https://miro.medium.com/v2/resize:fit:1400/1*TRjmlK0FyH4spdacpzld7w.png)

## Better ways to manage your Web3 keys
------------------------------------

### Hardware Security Modules (HSMs)
-   Use Hardware Security Modules (HSMs) to create, store, and manage cryptographic keys in a secure, tamper-proof device. Connect HSMs directly to wallet signing systems so private keys never leave the device. This setup blocks remote hackers and helps prevent insider attacks.
### Threshold Cryptography
-   Use threshold cryptography in all critical transactions. Require several independent systems to sign off before any action happens. This removes centralized control and stops any one system from becoming a single point of failure, exactly what went wrong in the Bybit hack, where attackers exploited shared access through the UI used by multiple signers.
### Biometric Access and Secure Enclaves
-   For high-value operations, always require biometric authentication. Combine it with secure enclaves like Intel SGX or Apple's Secure Enclave. These enclaves keep sensitive tasks isolated, even if the main system is compromised. When paired with biometrics, they add a strong, human-verified layer to digital signing.
### Recovery and Backup Strategies
-   Design backup strategies that never expose private keys or recovery phrases in plain text. Use encrypted backups, hardware devices to store recovery shards, or fully offline (air-gapped) systems. Always require manual checks and approval from multiple trusted parties before any recovery process begins. This prevents unauthorized or rogue access.

![](https://miro.medium.com/v2/resize:fit:1400/0*PIpop62S9NMJnDZW.png)

## More secure decentralized node operations
-----------------------------------------

-   Run your nodes on hardened virtual machines or dedicated servers inside secure data centers. Avoid using public cloud providers unless they offer strong tenant isolation. Harden the operating system, apply patches regularly, and set up intrusion detection tools. Use bastion hosts to keep nodes isolated from admin consoles and manage access through privileged access controls.
-   Use end-to-end encryption to protect peer-to-peer (P2P) node communication.\
    Apply authenticated encryption with TLS or Noise Protocol to block man-in-the-middle attacks. Secure transport layers make sure gossiping, consensus, and transaction messages stay safe and unchanged during transmission.
-   Run your nodes in different countries and regions.\
    This helps prevent downtime from local outages, internet issues, or government actions. Spreading nodes out also makes your network stronger against DDoS attacks and hardware failures.
-   Track node performance in real time with tools that monitor uptime, sync delays, and latency. Set up automated alerts to catch issues like slow block propagation or low peer count. This visibility helps you spot problems early and keeps your network consensus strong.

![](https://miro.medium.com/v2/resize:fit:1400/0*29OaiKOjS_EUaNE5.png)

## Operational processes that make Web3 systems resilient
------------------------------------------------------

A well-secured Web3 infrastructure demands disciplined operational processes that anticipate failures, limit human error, and accelerate response.

Follow these processes to fully secure your Web3 system:

-   Use Role-Based Access Control (RBAC) to manage permissions
Assign access based on job roles, not individuals. This limits overprivileged accounts and makes it easier to track who has access to what. For example, an operations engineer who handles wallet transactions shouldn't have access to treasury or development systems.


![Use Role-Based Access Control (RBAC) to manage permissions](https://miro.medium.com/v2/resize:fit:1400/1*qKpJ8VPx3ZXm9upIZYdvZg.png)

-   Apply the Least Privilege Principle Give each user only the access they need to do their job, nothing more. Constantly review permissions and remove the ones your system no longer needs. The Bybit hack showed how attackers can abuse excessive privileges, even through tricks on the frontend. If your Web3 system keeps access tightly controlled, it can reduce the damage if something goes wrong.


![Apply the Least Privilege Principle](https://miro.medium.com/v2/resize:fit:1400/1*gc1ZOSL_HLKaf2XbjYXWkA.png)

-   Mitigate Insider Threats Track all transaction requests, access events, and key operations with detailed audit logs. Require peer reviews before anyone signs transactions or pushes code to production. Use a separation-of-duties model so no one can carry out high-risk actions alone.


![Mitigate Insider Threats](https://miro.medium.com/v2/resize:fit:1400/1*HIiPnsJ8mLgR81WuAuDZiQ.png)

-   Create Incident Response Playbooks Teams need clear playbooks to act fast when something goes wrong. If a wallet shows strange activity, like unexpected transactions or unknown connections, then the team should follow a step-by-step guide. A wallet freeze runbook must explain exactly how to pause activity, lock down access, and stop any more funds from moving. It should also list who must approve each step so nothing happens without the right sign-offs.


![](https://miro.medium.com/v2/resize:fit:1400/0*n7Kf4YHVo83owmts.jpg)

-   Set clear steps for handling a breach. Create an escalation matrix that shows who makes key decisions, who handles public communication, and who leads the technical response. Define both on-chain and off-chain roles for emergencies in DAOs and hybrid Web3 organizations. Use pre-approved multi-sig transactions or emergency votes to act quickly when something goes wrong.


![](https://miro.medium.com/v2/resize:fit:1400/0*7pFGmVuoTIv7n-Ut.png)

-   Use On-Chain Analytics for Real-Time Monitoring Set up on-chain monitoring tools to track suspicious activity, like wallet drains, unexpected protocol interactions, or sudden drops in total value locked (TVL). Make sure dashboards send real-time alerts to both technical teams and governance leads.


![](https://miro.medium.com/v2/resize:fit:1400/0*4vfn3Q9RcvfUdsuI.png)

-   Require Multiple Reviewers for Code Changes Always make sure at least two people review any smart contract update before it goes live. Use version control tools like Git with branch protection rules. These rules block unapproved or unreviewed code from reaching staging or production.


![](https://miro.medium.com/v2/resize:fit:1400/0*Zsj1AockKkMijJYH.jpg)

-   Secure CI/CD Pipelines with Guardrails CI/CD pipelines should block unsafe code before it reaches production. Add security checks like static analysis, vulnerability scans, and permission validation at every stage. Automate audits before deployment and require signed approvals. This ensures every contract deployment is secure, traceable, and hard to tamper with.


![](https://miro.medium.com/v2/resize:fit:1400/0*iWwnzHt5o_wyZ0mp.jpg)

## Governance and Compliance Considerations
----------------------------------------

Strong governance and compliance shape how Web3 projects enforce security, apply policies, and assign accountability. In this space, protocols often manage billions in user assets. When governance is weak, even perfect code can't protect against bad decisions. Web3 organizations must build governance models that are structured, transparent, and enforceable.

Adopt the following Governance models to enforce security protocols on your Web3 systems:

### DAO or Corporate Structures: Who Makes the Security Decisions?\
In a Decentralized Autonomous Organization (DAO), token holders make decisions together. This creates transparency, but it slows down how fast the organization can respond to security threats. DAOs often struggle to act quickly in emergencies because every decision needs community approval.

On the other hand, corporate entities have clear leadership. These leaders can quickly enforce security changes, but they give up some decentralization and may lose trust from users who value open governance.

To bridge this gap, many projects now use hybrid models. In these setups, the community proposes ideas, but a trusted group like a multisig council or security committee has the power to act fast during a crisis. This approach keeps governance transparent while improving emergency response.


![](https://miro.medium.com/v2/resize:fit:1400/0*dmZcXQf9qCE_uIwa.png)

### Build Transparent and Enforceable Security Policies\
Security policies should not live in internal handbooks. Publish your operational security playbooks, wallet management standards, and incident protocols on public or on-chain governance forums. This allows token holders and contributors to audit, propose, and enforce changes.

Use smart contracts to encode enforcement, such as automatic freezing of treasury wallets upon detection of suspicious activity. For example, multisig wallets can be programmed with time locks and quorum thresholds that align with governance-defined risk levels.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/0*eh7_xBFbBlA9-g6u.jpg)

### Understand and Adapt to Regulatory Pressures

Web3 projects now operate under increasing legal scrutiny. Global regulations now shape how teams handle wallets, user data, and compliance workflows.

FATF rules apply to custodial assets. If your project holds user funds, you must implement Anti-Money Laundering (AML) controls and Know Your Customer (KYC) checks, even if you build those checks into your smart contracts.

GDPR affects how you handle user data. If your protocol collects or stores personally identifiable information (PII), you must manage it carefully. On-chain data that can de-anonymize users falls under these rules.

MiCA sets new rules for EU-facing projects. Crypto Asset Service Providers (CASPs) must prove they can handle security incidents and maintain operational resilience. You'll need to show evidence of cybersecurity policies and timely incident response.

**Note**: Global teams must plan for legal overlap. If your protocol runs across borders, expect to comply with multiple legal systems. Design your data flows, wallet access rules, and incident response plans with these regulations in mind.


![](https://miro.medium.com/v2/resize:fit:1400/0*DY9roKIoOc3VkQmD.png)

## Security Tools for Web3 Teams
------------------------------------------

Web3 teams in 2025 can't rely on manual audits or traditional firewalls. Today's threats move fast and evolve constantly. Teams need real-time, automated protection to stay ahead.

Every team should use a layered security stack. This means tools that detect threats before they cause damage, scan smart contracts before deployment, and manage wallet operations with fewer chances for human error.

Modern Web3 security is proactive, not reactive. Teams must build with automation, visibility, and rapid response at the core of their infrastructure.

### Secure Wallet Orchestration Platforms

Secure wallet orchestration platforms act as the first line of defense for Web3 teams. Tools like Gnosis Safe, Amboss, and Squads help teams manage multi-signature and MPC wallets efficiently. These platforms support programmable transaction workflows, policy-based access controls, and real-time approvals.

They reduce human error as they automate treasury disbursements, enforce time locks, and require quorum approvals for critical actions. Teams can set clear rules for who can access funds, when transactions can occur, and how decisions are made.

Modern orchestration tools also connect with governance systems and security playbooks. This integration allows teams to freeze wallets or reroute funds immediately during a breach or suspicious activity.


![](https://miro.medium.com/v2/resize:fit:1400/0*71hoa-gc0RKS9V2F.png)

### SIEM Tools Tailored for Web3 Telemetry

Web3 environments need SIEM tools designed for decentralized and pseudonymous networks. Traditional SIEMs fall short in this space. In 2025, solutions like Chainalysis Reactor, AnChain.AI, and ChainGuardian will be built specifically for blockchain operations.

These platforms collect logs from smart contracts, validator nodes, wallet interactions, and bridge protocols. They analyze this telemetry in real time to detect threats across both on-chain and off-chain environments.

Web3 SIEMs alert security teams to unusual contract activity, suspicious staking behaviors, and unexpected validator reorganizations. This fast detection helps teams respond quickly before damage spreads.


![](https://miro.medium.com/v2/resize:fit:1400/0*5AnJnmOw1eSefBqk.jpg)

### Smart Contract Scanners and Automated Auditors

Smart contract teams must no longer deploy untested code. Tools like Slither, MythX, Sherlock, and Certora Prover now integrate directly into CI/CD pipelines to catch issues before contracts hit the mainnet. These scanners detect reentrancy bugs, logic errors, gas inefficiencies, and access control misconfigurations early in the development cycle.

In 2025, leading protocols use more than just static analysis. They combine symbolic execution, fuzz testing, and formal verification to strengthen contract reliability. Some teams even run contract twins in forked environments. This approach simulates real-chain behavior and reveals bugs that traditional tests often miss.


![](https://miro.medium.com/v2/resize:fit:1400/0*xh25zE3R9rccL4xn.png)

### dApp Behavior Anomaly Detectors

Security doesn't stop at contract audits. Decentralized apps (dApps) can behave unpredictably, especially when they interact with other protocols. Tools like Blockfence, Hexagate, and ChainPatrol constantly monitor dApp behavior on both the frontend and backend.

These platforms detect transaction flow anomalies, phishing redirections, and compromised frontends. They can block dangerous functions in real time, alert teams if wallet-draining signatures are triggered, and flag suspicious session key reuse or contract impersonation.


![](https://miro.medium.com/v2/resize:fit:1400/0*XU621oAdhQo_WHhq.png)

### On-Chain Monitoring and Alerting Solutions

Real-time monitoring is critical if you want to detect threats and ensure uptime. Tools like Forta, Tenderly, and Halborn's Watchtower Suite deliver continuous visibility into EVM chains and L2 activity.

Forta uses customizable bots to track protocol changes, suspicious transactions, and governance proposals as they happen.

Tenderly monitors system performance, gas usage reports, and rollback tools for debugging live issues.

Halborn's Watchtower Suite adds advanced features like exploit path simulations, validator health checks, and an automated incident playbook, which gives teams the edge in fast-moving attack scenarios like the Bybit one.

These solutions feed directly into SecOps dashboards, which allow security teams to correlate on-chain signals with operational telemetry and governance actions.


![](https://miro.medium.com/v2/resize:fit:1400/0*7Rgy3Ee3gLZ10uca.png)

on-chain monitoring and alerts

## Final Thoughts
--------------

The $1.4 billion Bybit Wallet Safe hack exposed more than technical flaws, it revealed how fragile trust in Web3 still is. But this breach also serves as a wake-up call. It's a chance to build better before the next disaster hits.

Web3 teams must design security from day one, not add it later. As the ecosystem grows, so do the risks. Every contract, wallet, and protocol must scale its defenses alongside its value.