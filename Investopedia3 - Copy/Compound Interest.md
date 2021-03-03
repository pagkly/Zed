---
alias: [Compound Interest]
created: 2021-03-02T18:55:44 (UTC +11:00)
tags: [Compound Interest Definition, Compound Interest]
source: https://www.investopedia.com/terms/c/compoundinterest.asp
author: Jason Fernando
---

# Compound Interest Definition

> ## Excerpt
> Compound interest is the interest on a loan or deposit calculated based on both the initial principal and and the accumulated interest from previous periods.

---

Compound Interest
## What Is Compound Interest?

Compound interest (or compounding interest) is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Thought to have originated in 17th-century Italy, compound interest can be thought of as "interest on interest," and will make a sum grow at a faster rate than [simple interest](https://www.investopedia.com/terms/s/simple_interest.asp), which is calculated only on the principal amount.

The rate at which compound interest accrues depends on the frequency of compounding, such that the higher the number of [compounding](https://www.investopedia.com/terms/c/compounding.asp) periods, the greater the compound interest. Thus, the amount of compound interest accrued on $100 compounded at 10% annually will be lower than that on $100 compounded at 5% semi-annually over the same time period. Since the interest-on-interest effect can generate increasingly positive returns based on the initial principal amount, it has sometimes been referred to as the "miracle of compound interest."

### Key Takeaways

-   Compound interest (or compounding interest) is interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods on a deposit or loan.
-   Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one.
-   Interest can be compounded on any given frequency schedule, from continuous to [daily](https://www.investopedia.com/ask/answers/040315/what-does-it-mean-when-interest-accrues-daily.asp) to annually.
-   When calculating compound interest, the number of compounding periods makes a significant difference.

#### Understanding Compound Interest

## Calculating Compound Interest

Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one. The total initial amount of the loan is then subtracted from the resulting value.

Katie Kerpel {Copyright} Investopedia, 2019.

The formula for calculating compound interest is:

-   Compound interest = total amount of principal and interest in future (or future value) _less_ principal amount at present (or present value)

> **\= \[P (1 + _i_)n\] – P**

> **\= P \[(1 + _i_)n – 1\]**

Where:

> P = principal

> _i_ = nominal annual interest rate in percentage terms

> n = number of compounding periods

Take a three-year loan of $10,000 at an interest rate of 5% that compounds annually. What would be the amount of interest? In this case, it would be:

> $10,000 \[(1 + 0.05) 3 – 1\] = $10,000 \[1.157625 – 1\] = $1,576.25

## Growth of Compound Interest

Using the above example, since compound interest also takes into consideration accumulated interest in previous periods, the interest amount is not the same for all three years, as it would be with simple interest. While the total interest payable over the three-year period of this loan is $1,576.25, the interest payable at the end of each year is shown in the table below.

## Compounding Periods

When calculating compound interest, the number of compounding periods makes a significant difference. The basic rule is that the higher the number of compounding periods, the greater the amount of compound interest.

The following table demonstrates the difference that the number of compounding periods can make for a $10,000 loan with an annual 10% interest rate over a 10-year period.

Compound interest can significantly boost investment returns over the long term. While a $100,000 deposit that receives 5% simple annual interest would earn $50,000 in total interest over 10 years, the annual compound interest of 5% on $10,000 would amount to $62,889.46 over the same period. If the compounding period were instead paid monthly over the same 10-year period at 5% compound interest, the total interest would instead grow to $64,700.95.1

## Excel Compounding Calculation

If it's been a while since your math class days, fear not: There are handy tools to help figure compounding. Many calculators (both handheld and computer-based) have exponent functions that can be utilized for these purposes. If more complicated compounding tasks arise, [they can be done using Microsoft Excel](https://www.investopedia.com/ask/answers/031915/how-do-i-calculate-compound-interest-using-excel.asp)—in three different ways.

1.  The first way to calculate compound interest is to multiply each year's new balance by the interest rate. Suppose you deposit $1,000 into a savings account with a 5% interest rate that compounds annually, and you want to calculate the balance in five years. In Microsoft Excel, enter "Year" into cell A1 and "Balance" into cell B1. Enter years 0 to 5 into cells A2 through A7. The balance for year 0 is $1,000, so you would enter "1000" into cell B2. Next, enter "=B2\*1.05" into cell B3. Then enter "=B3\*1.05" into cell B4 and continue to do this until you get to cell B7. In cell B7, the calculation is "=B6\*1.05". Finally, the calculated value in cell B7 - $1,276.28 - is the balance in your savings account after five years. To find the compound interest value, subtract $1,000 from $1,276.28; this gives you a value of $276.28.
2.  The second way to calculate compound interest is to use a fixed formula. The compound interest formula is ((P\*(1+i)^n) - P), where P is the principal, i is the annual interest rate, and n is the number of periods. Using the same information above, enter "Principal value" into cell A1 and 1000 into cell B1. Next, enter "Interest rate" into cell A2 and ".05" into cell B2. Enter "Compound periods" into cell A3 and "5" into cell B3. Now you can calculate the compound interest in cell B4 by entering "=(B1\*(1+B2)^B3)-B1", which gives you $276.28.
4.  A third way to calculate compound interest is to create a macro function. First start the Visual Basic Editor, which is located in the developer tab. Click the Insert menu, and click on Module. Then type "Function Compound\_Interest(P As Double, i As Double, n As Double) As Double" in the first line. On the second line, hit the tab key and type in "Compound\_Interest = (P\*(1+i)^n) - P." On the third line of the module, enter "End Function." You have created a function macro to calculate the compound interest rate. Continuing from the same Excel worksheet above, enter "Compound interest" into cell A6 and enter "=Compound\_Interest(B1,B2,B3)." This gives you a value of $276.28, which is consistent with the first two values.

## Using Other Calculators

As mentioned above, a number of free compound interest calculators are offered online, and many handheld calculators can carry out these tasks as well.

-   The free compound interest calculator offered through Financial-Calculators.com is simple to operate and offers to compound frequency choices from daily through annually. It includes an option to select continuous compounding and also allows input of actual calendar start and end dates. After inputting the necessary calculation data, the results show interest earned, future value, annual percentage yield (APY), [which is a measure that includes compounding](https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/), and daily interest.
-   [Investor.gov](https://www.investor.gov/additional-resources/free-financial-planning-tools/compound-interest-calculator), a website operated by the U.S. Securities and Exchange Commission (SEC), offers a free online compound interest calculator. The calculator is fairly simple, but it does allow inputs of monthly additional deposits to the principal, which is helpful for calculating earnings where additional monthly savings are being deposited.
-   A free online interest calculator with a few more features is available at TheCalculatorSite.com. This calculator allows calculations for different currencies, the ability to factor in monthly deposits or withdrawals, and the option to have inflation-adjusted increases to monthly deposits or withdrawals automatically calculated as well.

## The Frequency of Compounding

Interest can be compounded on any given frequency schedule, from daily to annually. There are standard compounding frequency schedules that are usually applied to financial instruments.

The commonly used compounding schedule for [savings account at a bank](https://www.investopedia.com/articles/personal-finance/062315/how-interest-rates-work-savings-accounts.asp) is daily. For a CD, typical compounding frequency schedules are daily, monthly, or semi-annually; for [money market](https://www.investopedia.com/terms/m/moneymarket.asp) accounts, it's often daily. For home mortgage loans, home equity loans, personal business loans, or credit card accounts, the most commonly applied compounding schedule is monthly.

There can also be variations in the time frame in which the accrued interest is actually credited to the existing balance. Interest on an account may be compounded daily but only credited monthly. It is only when the interest is actually credited, or added to the existing balance, that it begins to earn additional interest in the account.

Some banks also offer something called [continuously compounding](https://www.investopedia.com/terms/c/continuouscompounding.asp) interest, which adds interest to the principal at every possible instant. For practical purposes, it doesn't accrue that much more than daily compounding interest unless you're wanting to put money in and take it out the same day.

More frequent compounding of interest is beneficial to the investor or creditor. For a borrower, the opposite is true.

## Time Value of Money Consideration

Understanding the time value of money and the exponential growth created by compounding is essential for investors looking to optimize their income and wealth allocation.

The formula for obtaining the future value (FV) and present value (PV) are as follows:

> **FV = PV (1 +i)n and PV = FV / (1 + i) n**

For example, the future value of $10,000 compounded at 5% annually for three years:

> \= $10,000 (1 + 0.05) 3

> \= $10,000 (1.157625)

> \= $11,576.25

The present value of $11,576.25 discounted at 5% for three years:

> \= $11,576.25 / (1 + 0.05) 3

> \= $11,576.25 / 1.157625

> \= $10,000

The reciprocal of 1.157625, which equals 0.8638376, is the discount factor in this instance.

## The "Rule of 72" Consideration

The so-called Rule of 72 calculates the approximate time over which an investment will double at a given rate of return or interest "i," and is given by (72/i). It can only be used for annual compounding.

As an example, an investment that has a 6% annual rate of return will double in 12 years. An investment with an 8% annual rate of return will thus double in nine years.

## Compound Annual Growth Rate (CAGR)

The compound annual growth rate (CAGR) is used for most financial applications that require the calculation of a single growth rate over a period of time.

Let's say your investment portfolio has grown from $10,000 to $16,000 over five years; what is the CAGR? Essentially, this means that PV = -$10,000, FV = $16,000, and nt = 5, so the variable “i” has to be calculated. Using a financial calculator or Excel, it can be shown that i = 9.86%.

According to the cash-flow convention, your initial investment (PV) of $10,000 is shown with a negative sign since it represents an outflow of funds. PV and FV must necessarily have opposite signs to solve for “i” in the above equation.

### CAGR Real-life Applications

The CAGR is extensively used to calculate returns over periods of time for stock, [mutual funds](https://www.investopedia.com/ask/answers/051415/what-difference-between-mutual-fund-and-money-market-fund.asp), and investment portfolios. The CAGR is also used to ascertain whether a mutual fund manager or portfolio manager has exceeded the market’s rate of return over a period of time. If, for example, a market index has provided total returns of 10% over a five-year period, but a fund manager has only generated annual returns of 9% over the same period, the manager has underperformed the market.

The CAGR can also be used to calculate the expected growth rate of investment portfolios over long periods of time, which is useful for such purposes as saving for retirement. Consider the following examples:

**Example 1:** A risk-averse investor is happy with a modest 3% annual rate of return on her portfolio. Her present $100,000 portfolio would, therefore, grow to $180,611 after 20 years. In contrast, a risk-tolerant investor who expects an annual return of 6% on her portfolio would see $100,000 grow to $320,714 after 20 years.

**Example 2:** The CAGR can be used to estimate how much needs to be stowed away to save for a specific objective. A couple who would like to save $50,000 over 10 years towards a down payment on a condo would need to save $4,165 per year if they assume an annual return (CAGR) of 4% on their savings. If they are prepared to take a little extra risk and expect a CAGR of 5%, they would need to save $3,975 annually.

**Example 3:** The CAGR can also be used to demonstrate the virtues of investing earlier rather than later in life. If the objective is to save $1 million by retirement at age 65, based on a CAGR of 6%, a 25-year old would need to save $6,462 per year to attain this goal. A 40-year old, on the other hand, would need to save $18,227, or almost three times that amount, to attain the same goal.

-   CAGRs also crop up frequently in economic data. Here is an example: China’s per-capita GDP increased from $193 in 1980 to $6,091 in 2012. What is the annual growth in per-capita GDP over this 32-year period? The growth rate “i” in this case works out to be an impressive 11.4%.

## Pros and Cons of Compounding

While [the magic of compounding](https://www.investopedia.com/ask/answers/032515/how-can-i-tell-if-loan-uses-simple-or-compound-interest.asp) has led to the apocryphal story of Albert Einstein calling it the eighth wonder of the world or man’s greatest invention, compounding can also work against consumers who have loans that carry very high-interest rates, such as credit card debt. A credit card balance of $20,000 carried at an interest rate of 20% compounded monthly would result in total compound interest of $4,388 over one year or about $365 per month.

On the positive side, the magic of compounding can work to your advantage when it comes to your investments and can be a potent factor in wealth creation. Exponential growth from compounding interest is also important in mitigating wealth-eroding factors, like rises in the cost of living, inflation, and reduction of purchasing power.

Mutual funds offer one of the easiest ways for investors to [reap the benefits of compound interest](https://www.investopedia.com/ask/answers/100715/how-do-mutual-funds-compound-interest.asp). Opting to reinvest dividends derived from the mutual fund results in purchasing more shares of the fund. More compound interest accumulates over time, and the cycle of purchasing more shares will continue to help the investment in the fund grow in value.

Consider a mutual fund investment opened with an initial $5,000 and an annual addition of $2,400. With an average of 12% annual return of 30 years, the future value of the fund is $798,500. The compound interest is the difference between the cash contributed to investment and the actual future value of the investment. In this case, by contributing $77,000, or a cumulative contribution of just $200 per month, over 30 years, compound interest is $721,500 of the future balance.

Of course, earnings from compound interest are taxable, unless the money is in a tax-sheltered account; it's ordinarily taxed at the standard rate associated with the taxpayer's tax bracket.

## Compound Interest Investments

An investor who opts for a reinvestment plan within a brokerage account is essentially using the power of compounding in whatever they invest. Investors can also experience compounding interest with the purchase of a zero-coupon bond. Traditional bond issues provide investors with periodic interest payments based on the original terms of the bond issue, and because these are paid out to the investor in the form of a check, interest does not compound.

Zero-coupon bonds do not send interest checks to investors; instead, this type of bond is purchased at a discount to its original value and grows over time. Zero-coupon bond issuers use the power of compounding to increase the value of the bond so it reaches its full price at maturity.

Compounding can also work for you when making loan repayments. Making half your mortgage payment twice a month, for example, rather than making the full payment once a month, will end up cutting down your amortization period and saving you a substantial amount of interest.

Speaking of loans…

## Telling if Interest Is Compounded

The [Truth in Lending Act (TILA)](https://www.investopedia.com/terms/t/tila.asp) requires that lenders disclose loan terms to potential borrowers, including the total dollar amount of interest to be repaid over the life of the loan and whether interest accrues simply or is compounded.

Another method is to compare a loan's interest rate to its annual percentage rate (APR), which the TILA also requires lenders to disclose. The APR converts the finance charges of your loan, which include all interest and fees, to a simple interest rate. A [substantial difference between the interest rate and APR](https://www.investopedia.com/articles/investing/121713/interest-rates-apr-apy-and-ear.asp) means one or both of two scenarios: Your loan uses compound interest, or it includes hefty loan fees in addition to interest. Even when it comes to the same type of loan, the APR range can vary wildly between lenders depending on the financial institution's fees and other costs.

You'll note that the interest rate you are charged also depends on your credit. Loans [offered to those with excellent credit](https://www.investopedia.com/best-personal-loans-for-excellent-credit-4797495) carry significantly lower interest rates than t[hose charged to those with poor credit](https://www.investopedia.com/best-personal-loans-for-bad-credit-4774349).

## Frequently Asked Questions

### What is a simple definition of compound interest?

Compound interest refers to the phenomenon whereby the interest associated with a bank account, loan, or investment increases exponentially—rather than linearly—over time. The key to understanding the concept is the word “compound.” Suppose you make a $100 investment in a business that pays you a 10% dividend every year. You have the choice of either pocketing those dividend payments as cash, or reinvesting those payments into additional shares. If you choose the second option, reinvesting the dividends and compounding them together with your initial $100 investment, then the returns you generate will start to grow over time.

### Who benefits from compound interest?

Simply put, compound interest benefits investors, but the meaning of “investors” can be quite broad. Banks, for instance, benefit from compound interest when they lend money and reinvest the interest they receive into giving out additional loans. Depositors also benefit from compound interest when they receive interest on their bank accounts, bonds, or other investments. It is important to note that although the term “compound interest” includes the word “interest,” the concept applies beyond situations where the word interest is typically used, such as bank accounts and loans.

### Can compound interest make you rich?

Yes. In fact, compound interest is arguably the most powerful force for generating wealth ever conceived. There are records of merchants, lenders, and various business-people using compound interest to become rich for literally thousands of years. In the ancient city of Babylon, for example, clay tablets were used over 4,000 years ago to instruct students on the mathematics of compound interest. 

In modern times, Warren Buffett became one of the richest people in the world through a business strategy that involved diligently and patiently compounding his investment returns over long periods of time. It is likely that, in one form or another, people will be using compound interest to generate wealth for the foreseeable future.
