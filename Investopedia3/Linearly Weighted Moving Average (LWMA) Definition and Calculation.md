---
alias: [Linearly Weighted Moving Average (LWMA) Definition and Calculation]
created: 2021-03-02T21:19:47 (UTC +11:00)
tags: [Linearly Weighted Moving Average (LWMA) Definition and Calculation, Linearly Weighted Moving Average (LWMA) Definition and Calculation]
source: https://www.investopedia.com/terms/l/linearlyweightedmovingaverage.asp
author: Cory Mitchell
---

# Linearly Weighted Moving Average (LWMA) Definition and Calculation

> ## Excerpt
> A linearly weighted moving average is a type of moving average where more recent prices are given greater weight in the calculation, and prior prices are given less weight.

---

Linearly Weighted Moving Average (LWMA) Definition and Calculation
## What Is a Linearly Weighted Moving Average?

A linearly weighted moving average (LWMA) is a [moving average](https://www.investopedia.com/terms/m/movingaverage.asp) calculation that more heavily weights recent price data. The most recent price has the highest weighting, and each prior price has progressively less weight. The weights drop in a linear fashion. LWMAs are quicker to react to price changes than [simple moving averages](https://www.investopedia.com/terms/s/sma.asp) (SMA) and [exponential moving averages](https://www.investopedia.com/terms/e/ema.asp) (EMA).

TradingView.

### Key Takeaways

-   Use a linearly weighted moving average in the same way as an SMA or EMA.
-   Use a LWMA to more clearly define the price trend and [reversals](https://www.investopedia.com/terms/r/reversal.asp), provide trade signals based on [crossovers](https://www.investopedia.com/terms/c/crossover.asp), and indicate areas of potential [support](https://www.investopedia.com/terms/s/support.asp) or resistance.
-   Traders who want a moving average with less [lag](https://www.investopedia.com/terms/l/laggingindicator.asp) than an SMA may wish to utilize a LWMA.

## The Formula for the Linearly Weighted Moving Average (LWMA) Is:

LWMA\=(Pn∗W1)+(Pn−1∗W2)+(Pn−2∗W3)...∑Wwhere:P = Price for the periodn = The most recent period, n-1 is the prior period,and n-2 is two periods priorW = The assigned weight to each period, with thehighest weight going first and then descending linearlybased on the number of periods being used\\begin{aligned} &\\text{LWMA}=\\frac{\\left(P\_n\*W\_1\\right)+\\left(P\_{n-1}\*W\_2\\right)+\\left(P\_{n-2}\*W\_3\\right)...}{\\sum{W}}\\\\ &\\textbf{where:}\\\\ &\\text{P = Price for the period}\\\\ &\\text{n = The most recent period, n-1 is the prior period,}\\\\ &\\text{and n-2 is two periods prior}\\\\ &\\text{W = The assigned weight to each period, with the}\\\\ &\\text{highest weight going first and then descending linearly}\\\\ &\\text{based on the number of periods being used}\\\\ \\end{aligned}

## How to Calculate the Linearly Weighted Moving Average (LWMA)

1.  Choose a lookback period. This is how many n values will be calculated into the LWMA.
2.  Calculate the linear weights for each period. This can be accomplished in a couple of ways. The easiest is to assign n as the weight for the first value. For example, if using a 100-period lookback, then the first value is multiplied by a weight of 100, the next value is multiplied by a weight of 99. A more complex way is to choose a different weight for the most recent value, such as 30. Now each value will need to drop by 30/100 so that when n-99 (100th period) is reached the weight is one.
3.  Multiply the prices for each period by their respective weights, then get the sum total.
4.  Divide the above by the sum of all the weights.

Let’s say we are interested in calculating the linearly weighted moving average of the [closing price](https://www.investopedia.com/terms/c/closingprice.asp) of a stock over the last five days.

Begin by multiplying today’s price by 5, yesterday’s by 4, and the price of the day before by 3. Continue multiplying each day’s price by its position in the data series until reaching the first price in the data series, which is multiplied by 1. Add these results together, divide by the sum of the weights, and you will have the linearly weighted moving average for this period.

((P5\*5)+(P4\*4)+(P3\*3)+(P2\*2)+(P1\*1)) / (5+4+3+2+1)

Let’s say that the price of this stock fluctuates as so:

Day 5: $90.90  
Day 4: $90.36  
Day 3: $90.28  
Day 2: $90.83  
Day 1: $90.91

((90.90\*5)+(90.36\*4)+(90.28\*3)+(90.83\*2)+(90.91\*1)) / (5+4+3+2+1) = 90.62

The LWMA of this stock over this time period is $90.62.

## What Does the Linearly Weighted Moving Average (LWMA) Tell You?

The linearly weighted moving average is a method of calculating the average price of an asset over a given period of time. This method weights recent data more heavily than older data, and is used to analyze market [trends](https://www.investopedia.com/terms/t/trend.asp).

Generally, when the price is above the LWMA, and the LWMA is rising, the price is above the weighted average which helps confirm an [uptrend](https://www.investopedia.com/terms/u/uptrend.asp). If the price is below the LWMA, and the LWMA is pointed down, this helps confirm a [downtrend](https://www.investopedia.com/terms/d/downtrend.asp) in price.

When the price crosses the LWMA that could signal a trend change. For example, if the price is above the LWMA and then drops below it, that could indicate a shift from an uptrend to a downtrend.

When assessing trends, traders should be aware of the lookback period. The lookback period is how many periods are being calculated into the LWMA. A five-period LWMA will track price very closely and is useful for tracking small trends as the line will be easily breached by even minor price oscillations. A 100-period LWMA will not track the price as closely, meaning there will often be room between the LWMA and the price. This allows for the determination of longer-term trends and reversals.

Like other types of moving averages, the LWMA may sometime be used to indicate [support and resistance](https://www.investopedia.com/trading/support-and-resistance-basics/) areas. For example, in the past, the price bounced off the LWMA on multiple occasions and then moved higher. This indicates the line is acting as support. The line may continue to act as support in the future. Failure to do so could indicate the price trend has undergone a change. It could be reversing to the downside or may be starting a period where it moves more sideways.

## What is the Difference Between a Linearly Weighted Moving Average (LWMA) and a Double Exponential Moving Average (DEMA)?

Both of these moving averages are designed to reduce the lag that is inherent in the SMA. The LWMA does this by applying greater weight to recent prices. The [double exponential moving average](https://www.investopedia.com/terms/d/double-exponential-moving-average.asp) (DEMA) does this through multiplying the EMA over a certain period by two, and then subtracting a smoothed EMA. Because the MAs are calculated differently they will provide different values on a price chart.

## The Limitations of Using a Linearly Weighted Moving Average (LWMA)

All moving averages help to define trends when they are present, but provide little information when the price action is [choppy](https://www.investopedia.com/terms/c/choppymarket.asp) or moving predominantly sideways. During such times the price will oscillate around the MA. The MA will not provide good crossover or support/resistance signals during such times.

A LWMA may not provide support or resistance. This is especially likely if it hasn't done so in the past.

Multiple [false signals](https://www.investopedia.com/terms/f/false-signal.asp) may also occur before a significant trend develops. A false signal is when the price crosses the LWMA but then fails to move in the direction expected, resulting in a poor trade.
