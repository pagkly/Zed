---
alias: [Conditional Value at Risk, CVaR]
created: 2021-03-02T18:55:44 (UTC +11:00)
tags: [Conditional Value at Risk (CVaR), Conditional Value at Risk (CVaR)]
source: https://www.investopedia.com/terms/c/conditional_value_at_risk.asp
author: James Chen
---

# Conditional Value at Risk (CVaR)

> ## Excerpt
> Conditional Value at Risk (CVaR) quantifies the potential extreme losses in the tail of a distribution of possible returns.

---

Conditional Value at Risk (CVaR)
## What Is Conditional Value at Risk (CVaR)?

Conditional Value at Risk (CVaR), also known as the expected shortfall, is a risk assessment measure that quantifies the amount of [[tail risk]](https://www.investopedia.com/terms/t/tailrisk.asp) an investment portfolio has. CVaR is derived by taking a weighted average of the “extreme” losses in the tail of the distribution of possible returns, beyond the [[value at risk]](https://www.investopedia.com/terms/v/var.asp) (VaR) cutoff point. Conditional value at risk is used in portfolio optimization for effective risk management.

### Key Takeaways

-   Conditional value at risk is derived from the value at risk for a portfolio or investment.
-   The use of CVaR as opposed to just VaR tends to lead to a more conservative approach in terms of risk exposure.
-   The choice between VaR and CVaR is not always clear, but volatile and engineered investments can benefit from CVaR as a check to the assumptions imposed by VaR.

## Understanding Conditional Value at Risk (CVaR)

Generally speaking, if an investment has shown stability over time, then the value at risk may be sufficient for risk management in a portfolio containing that investment. However, the less stable the investment, the greater the chance that VaR will not give a full picture of the risks, as it is indifferent to anything beyond its own threshold.

Conditional Value at Risk (CVaR) attempts to address the shortcomings of the VaR model, which is a statistical technique used to measure the level of financial risk within a firm or an investment portfolio over a specific time frame. While VaR represents a worst-case loss associated with a probability and a time horizon, CVaR is the expected loss if that worst-case threshold is ever crossed. CVaR, in other words, quantifies the expected losses that occur beyond the VaR breakpoint.

## Conditional Value at Risk (CVaR) Formula

Since CVaR values are derived from the calculation of VaR itself, the assumptions that VaR is based on, such as the shape of the distribution of returns, the cut-off level used, the periodicity of the data, and the assumptions about [[stochastic volatility]](https://www.investopedia.com/terms/s/stochastic-volatility.asp), will all affect the value of CVaR. Calculating CVaR is simple once VaR has been calculated. It is the average of the values that fall beyond the VaR:

CVaR\=11−c∫−1VaRxp(x)dxwhere:p(x)dx\=the probability density of getting a return with value “x”c\=the cut-off point on the distribution where the analyst sets the VaR breakpointVaR\=the agreed-upon VaR level\\begin{aligned} &CVaR=\\frac{1}{1-c}\\int^{VaR}\_{-1}xp(x)\\,dx\\\\ &\\textbf{where:}\\\\ &p(x)dx= \\text{the probability density of getting a return with}\\\\ &\\qquad\\qquad\\ \\text{value \`\`}x\\text{''}\\\\ &c=\\text{the cut-off point on the distribution where the analyst}\\\\ &\\quad\\ \\ \\ \\text{sets the }VaR\\text{ breakpoint}\\\\ &VaR=\\text{the agreed-upon }VaR\\text{ level} \\end{aligned} 

## Conditional Value at Risk and Investment Profiles

Safer investments like large-cap U.S. stocks or investment-grade bonds rarely exceed VaR by a significant amount. More volatile asset classes, like small-cap U.S. stocks, emerging markets stocks, or derivatives, can exhibit CVaRs many times greater than VaRs. Ideally, investors are looking for small CVaRs. However, investments with the most upside potential often have large CVaRs.

Financially engineered investments often lean heavily on VaR because it doesn't get bogged down in outlier data in models. However, there have been times where engineered products or models may have been better constructed and more cautiously used if CVaR had been favored. History has many examples, such as [[Long-Term Capital Management]](https://www.investopedia.com/terms/l/longtermcapital.asp) which depended on VaR to measure its risk profile, yet still managed to crush itself by not properly taking into account a loss larger than forecasted by the VaR model. CVaR would, in this case, have focused the hedge fund on the true risk exposure rather than the VaR cutoff. In financial modeling, a debate is almost always going on about VaR versus CVaR for efficient risk management.
