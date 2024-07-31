---
title: ADC 采样 NTC 热敏电阻计算实际温度值
date: 2024-07-31 22:15:20
cover:
categories:
 - 嵌入式
tags:
 - 单片机
 - 嵌入式
---

通过 ADC 方式采样 NTC 热敏电阻 (10K)
得到 12 位采样数据（右对齐）

通过 Steinhart-Hart 方程计算并得到温度计算公式
适用于 3.3v 基准电压，12 位宽 的情况

转换公式如下
```c
#define to_temperature(adc_value) (1.0 / (0.001129148 + 0.000234185 * \
        log((10000 * adc_value * (3.3 / 4095.0)) / (3.3 - adc_value * \
        (3.3 / 4095.0))) + 0.0000000876741 * pow(log((10000 * adc_value * \
        (3.3 / 4095.0)) / (3.3 - adc_value * (3.3 / 4095.0))), 3))) - 273.15
```