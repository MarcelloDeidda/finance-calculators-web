# === Finance Calculators Web ===

1.Project info

2.Description

3.Contents

4.Webpage address

5.Previews

## 1.Project info:

Name: Finance Calculators Web

Developer: Marcello Deidda

Location: London, UK

Developed for Harvard CS50

## 2.Description:

### 2.1 Project

For the Final Project I have decided to create a single webpage that implements various formulas to calculate:

- Mortgage Repayments

- Simple interest

- Compound interest

I have researched the formulas online, before deciding how to develop the calculators. While the formulas should be valid internationally, I've used the Pound Sterling (£) as currency for the results.

For more info, please visit this [Youtube Guide](https://youtu.be/KcRjB_veVYA).

### 2.2 Development

I first created the structure in the index.html file, then I decided to style it with the help of Bootstrap v5.2. The page is organised in a navbar to navigate the content, and the two calculators, each one incapsulated in a "section" tag. The webpage is responsive, so it can be used on smaller devices too.

I added custom styles in the styles.css file, to apply a palette of colors I've created through [Coolors](https://coolors.co/).

I then proceeded to create an app.js file to work on the implementation. Using DOM manipulation, I extracted the user input and then calculated the results. I then rendered the results in a table, by changing the .innerText property of each field.

I have then tested the results by means of various calculators I have found online, created a Favicon with [Canva](https://www.canva.com/) and deployed the webpage via [Netlify](https://www.netlify.com/).

### 2.3 Formulas

The formulas I used are the following:

- Mortgage:  x = (i * P)/(1 - (1 + i) ^ (-n)) // Where x = monthly repayment amount, i = monthly interest rate / 100, P = present value of the house, n = number of months over which the morgage will be repaid.

- Simple Interest: A = P(1 + r * t) // Where A = total amount after interest, P = starting amount of the investment, t = number of years of investment, r = interest / 100.

- Compound Interest:  A = P(1 + r) ^ t // Where A = total amount after interest, P = starting amount of the investment, t = number of years of investment, r = interest / 100.


## 3.Contents:

- index.html

- styles.css

- app.js

- calculator.png

- README.md


## 4.Webpage address:

The webpage was deployed via netlify.com:
[Finance Calculators Web](https://marcellodeidda-financecalculators.netlify.app/)


## 5.Previews:

### 5.1 Tutorial
[Youtube Guide](https://youtu.be/KcRjB_veVYA)

### 5.2 Screenshots
- Mortgage:
![mortgage](https://user-images.githubusercontent.com/76016486/205913919-4ec9ae5f-f7d0-4280-b5e0-a8ad695bfacb.jpg)

- Interest:
![interest](https://user-images.githubusercontent.com/76016486/205913975-ae4d7521-462d-4f6f-a414-569be33c2ecc.jpg)

