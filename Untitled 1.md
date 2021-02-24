We can measure the accuracy of our hypothesis function by using a **cost function**. This takes an average difference (actually a fancier version of an average) of all the results of the hypothesis with inputs from x's and the actual output y's.

$\begin{aligned}
J(θ0,θ1)\=12m∑i\=1m(y^i−yi)2\=12m∑i\=1m(hθ(xi)−yi)2J(\\theta\_0, \\theta\_1) = \\dfrac {1}{2m} \\displaystyle \\sum \_{i=1}^m \\left ( \\hat{y}\_{i}- y\_{i} \\right)^2 = \\dfrac {1}{2m} \\displaystyle \\sum \_{i=1}^m \\left (h\_\\theta (x\_{i}) - y\_{i} \\right)^2
\end{aligned}$

To break it apart, it is 12\\frac{1}{2} xˉ\\bar{x} where xˉ\\bar{x} is the mean of the squares of hθ(xi)−yih\_\\theta (x\_{i}) - y\_{i} , or the difference between the predicted value and the actual value.

This function is otherwise called the "Squared error function", or "Mean squared error". The mean is halved (12)\\left(\\frac{1}{2}\\right) as a convenience for the computation of the gradient descent, as the derivative term of the square function will cancel out the 12\\frac{1}{2} term. The following image summarizes what the cost function does:

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/R2YF5Lj3EeajLxLfjQiSjg_110c901f58043f995a35b31431935290_Screen-Shot-2016-12-02-at-5.23.31-PM.png?expiry=1614297600000&hmac=5Rl_bFlcd12MQYbUJz8yO_9ypYU4g-nFAXLZX4-Dg9I)


$\begin{aligned}
Bias(\hat{\theta})  &= E(\hat{\theta}) - \theta \\
                    &= E(2 \bar{X} -1) - \theta \\
                    &= \frac{2}{n}\sum_{i=1}^n E(X_i) -1 -\theta \\
                    &= 2E(X) - 1 - \theta \\
                    &= 2 \cdot \frac{\theta+1}{2} - 1 - \theta \\
                    &= 0 \\
\end{aligned}$