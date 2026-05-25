# 📷 QR Code Generator
A one-page website to generate a QR code for a certain text or URL input from the user, using **React** as the <ins>Frontend</ins>, and the **qrcode** library as the <ins>QR code generator</ins>.  
This is a project in my Hands-On-Practice journey I started; where I learned that generating a QR code is as simple as writing anything else in code, apperantly.  

## 📦 Technologies
> React  
> JavaScript  
> ```qrcode``` Library  

## ✨ Features
Here is what QR Code Generator has to offer for the user:
- QR Code Generations: Obviously, a website called QR Code Generator will provide QR code generations. All that's needed from the user is to paste a text or a URL to the desired website that needs to be turned into a QR code.  
* QR Code Download: The user can also download their QR code into their computer as a ```.png``` file.  

## 👨🏽‍🍳 The Process
Who doesn't know QR codes? No one! It has became a necessity in life, companies, buisnesses, and personal lives. So, I decided to create a website that can help you generate a QR code for the any link you want.  
I went to a palette-generating website and saw a warm palette that looked suitable for this website.  
I created the files and design, and then imported the ```qrcode``` library into my project.  
I had some help from YouTube and the official documentaion of the library to know exactly how to use it. It wasn't hard to get around it!  

## 📚 What I Learned
During the development of the website, I learned about things I thought took a lot of time to implement and work on, but turned out to be easy and simple.  
### 📸 QR Code Generation:  
The ```qrcode``` library provides simple settings and ways to implemenet QR generation in a website, all you have to do is create a function that hosts this library variable in it, with the needed options and calling it inside of the button, and you have yourself a QR generation function!  

### ⬇ Downloading Files:  
Do you actually mean to tell me that having a function to download a file into the user's computer is basically using the ```download``` inside an ```<a>``` element?! It is easy, but I'm pretty sure that heavy downloads require a more professional approach, but for ```.png``` file that only take little Kb's on the computer, this approach works.  

## 🏗 How Can It Be Improved?  
- Adding a color box that lets the user pick the desired color of the generated QR code.  

## 🖼 Image of Website:  
<img width="1366" height="768" alt="qr-code-generator" src="https://github.com/user-attachments/assets/30f7dbbc-2edb-400f-a854-a44838f6630d" />

