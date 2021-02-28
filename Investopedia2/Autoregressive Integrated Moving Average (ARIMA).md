---
alias: [Autoregressive Integrated Moving Average (ARIMA)]
created: 2021-02-28T17:42:17 (UTC +11:00)
tags: [Autoregressive Integrated Moving Average (ARIMA), Autoregressive Integrated Moving Average (ARIMA)]
source: https://www.investopedia.com/terms/a/autoregressive-integrated-moving-average-arima.asp
author: James Chen
---

# Autoregressive Integrated Moving Average (ARIMA)

> ## Excerpt
> An autoregressive integrated moving average is a statistical analysis model that leverages time series data to forecast future trends.

---

Autoregressive Integrated Moving Average (ARIMA)
## What Is an Autoregressive Integrated Moving Average?

An autoregressive integrated moving average, or ARIMA, is a statistical analysis model that uses [time series data](https://www.investopedia.com/terms/t/timeseries.asp) to either better understand the data set or to predict future trends. 

## Understanding Autoregressive Integrated Moving Average (ARIMA)

An autoregressive integrated moving average model is a form of [regression analysis](https://www.investopedia.com/terms/r/regression.asp) that gauges the strength of one dependent variable relative to other changing variables. The model's goal is to predict future securities or financial market moves by examining the differences between values in the series instead of through actual values.

An ARIMA model can be understood by outlining each of its components as follows:

-   _[Autoregression (AR)](https://www.investopedia.com/terms/a/autoregressive.asp)_ refers to a model that shows a changing variable that regresses on its own lagged, or prior, values.
-   _Integrated (I)_ represents the differencing of raw observations to allow for the time series to become stationary, i.e., data values are replaced by the difference between the data values and the previous values.
-   _[Moving average (MA)](https://www.investopedia.com/terms/m/movingaverage.asp)_ incorporates the dependency between an observation and a residual error from a moving average model applied to lagged observations.

Each component functions as a parameter with a standard notation. For ARIMA models, a standard notation would be ARIMA with p, d, and q, where integer values substitute for the parameters to indicate the type of ARIMA model used. The parameters can be defined as:

-   _p_: the number of lag observations in the model; also known as the lag order.
-   _d_: the number of times that the raw observations are differenced; also known as the degree of differencing.
-   q: the size of the moving average window; also known as the order of the moving average.

In a [linear regression](https://www.investopedia.com/terms/n/nonlinear-regression.asp) model, for example, the number and type of terms are included. A 0 value, which can be used as a parameter, would mean that particular component should not be used in the model. This way, the ARIMA model can be constructed to perform the function of an ARMA model, or even simple AR, I, or MA models.

## Autoregressive Integrated Moving Average and Stationarity

In an autoregressive integrated moving average model, the data are differenced in order to make it stationary. A model that shows stationarity is one that shows there is constancy to the data over time. Most economic and market data show trends, so the purpose of differencing is to remove any trends or seasonal structures. 

[Seasonality](https://www.investopedia.com/terms/s/seasonality.asp), or when data show regular and predictable patterns that repeat over a calendar year, could negatively affect the regression model. If a trend appears and stationarity is not evident, many of the computations throughout the process cannot be made with great efficacy.
