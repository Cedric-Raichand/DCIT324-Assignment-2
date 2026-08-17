#  DCIT 324 Task Manager

A mobile Task Manager application built with **React Native and Expo** as part of the **DCIT 324: Mobile Application Development** practical assignment 

---

## 📌 Project Overview

The Task Manager provides a simple and visually clean interface for viewing daily tasks and organizing activities into different categories.

The screen was designed based on the provided Figma reference and implemented using React Native components.

The application includes:

- A greeting header
- User profile section
- Search bar
- Filter button
- Horizontally scrollable Categories section
- Ongoing Task section
- Eight ongoing tasks
- Seven task categories
- Custom images and visual elements
- Vertical and horizontal scrolling for accessibility

---

## ✨ Features

###  Greeting Header

Displays a personalized greeting and the number of tasks scheduled for the day.

Example:

> Hello, Devs  
> 14 tasks today

A profile image is displayed on the right side of the header.

---

### 🔍 Search Bar

The application includes a search interface with:

- Search icon
- Search input
- Placeholder text
- Filter button

The search and filter graphics are based on the original assets provided in the Figma design.

---

###  Categories

The application contains seven categories:

1. Exercise
2. Study
3. Leadership
4. Technology
5. Business
6. Programming 
7. Innovation

The Categories section is horizontally scrollable so that all categories remain accessible on smaller mobile screens.

Each category card contains:

- Category name
- Number of tasks
- Category image

---

### Ongoing Tasks

The application contains eight ongoing tasks:

1. Mobile App Development
2. Web Development
3. Push Ups
4. Database Design
5. UI/UX Design
6. Cloud Computing
7. Reading
8. Workout

The tasks are displayed vertically and can be accessed by scrolling down the screen.

---

##  Design

The application follows the visual style of the provided Figma reference, including:

- Warm cream background
- Rounded cards
- Orange filter button
- Soft light-colored cards
- Consistent spacing
- Rounded profile section
- Horizontal category scrolling
- Vertical task scrolling

The additional categories and task content were designed to remain visually consistent with the original reference.

---

##  Technologies Used

- **React Native**
- **Expo**
- **JavaScript**
- **React Native StyleSheet**
- **React Native ScrollView**
- **React Native TextInput**
- **React Native Image**
- **React Native TouchableOpacity**

---

##  Project Structure

```text
DCIT324-TaskManager/
│
├── assets/
│   └── images/
│       ├── person.png
│       ├── Vector.png
│       ├── Filter.png
│       ├── young woman working online.png
│       ├── young woman working at desk.png
│       ├── jj rawlings.webp
│       ├── mark zukerberg.webp
│       ├── sarian martin.webp
│       ├── courage.png
│       └── elon musk.webp
│
├── App.js
├── package.json
├── package-lock.json
└── README.md
