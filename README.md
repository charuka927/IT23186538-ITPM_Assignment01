# IT23186538-ITPM_Assignment01

# IT3040 – IT Project Management (ITPM)
Assignment 1 – Automated Testing Project
BSc (Hons) in Information Technology
Year 3 | Semester 1

---

# Student Information
Registration Number: IT23186538  
Assignment Type: Individual Assignment

---

# Project Overview
This repository contains the Playwright-based automated testing project
developed for Assignment 1 of the IT3040 – IT Project Management module.

The objective of this assignment is to evaluate the accuracy, stability,
and usability of a real-world transliteration system by testing how
effectively it converts Singlish input into Sinhala output.

The selected system under test is:
https://www.swifttranslator.com/

This assignment is completed individually in accordance with the module
guidelines.

GitHub Repository:
https://github.com/charuka927/IT23186538-ITPM_Assignment01.git

---

# Assignment Objectives
- Assess the accuracy of Singlish to Sinhala transliteration
- Identify scenarios where the system behaves correctly and incorrectly
- Test different sentence structures and daily language usage
- Validate system behavior across short, medium, and long inputs
- Evaluate UI behavior such as real-time output updates
- Automate all identified scenarios using Playwright
- Record execution results using the provided Excel test case template

---

# Scope of Testing

# Included
- Positive Functional Test Scenarios (24)
- Negative Functional Test Scenarios (10)
- UI-related Test Scenarios
- Sentence structures (simple, compound, complex)
- Interrogative and imperative forms
- Positive and negative sentence forms
- Greetings, requests, and responses
- Polite and informal phrasing
- Grammatical variations (tense, negation, pronouns)
- Input length variations:
  - S (≤ 30 characters)
  - M (31–299 characters)
  - L (≥ 300 characters)
- Mixed Singlish and English inputs
- Punctuation, numbers, dates, and formatting
- Informal and colloquial expressions

# Excluded
- Backend API testing
- Performance testing
- Security testing

---

# Technology Stack
- Automation Framework: Playwright
- Programming Language: TypeScript
- Runtime Environment: Node.js
- Browser: Chromium (Playwright default)
- Version Control: Git & GitHub

---

# Project Structure
IT23186538-ITPM_Assignment01/
│
├── tests/
│ ├── positive_functional.spec.ts
│ ├── negative_functional.spec.ts
│ ├── positive_ui.spec.ts
│ └── negative_ui.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── GitHub_Link.txt


---

# Prerequisites
Before running the project, ensure the following are installed:
- Node.js (version 16 or higher)
- npm
- Stable internet connection

---

# Installation Instructions
1. Clone the public GitHub repository:
git clone https://github.com/charuka927/IT23186538-ITPM_Assignment01.git


---

# Test Case Documentation
- All test cases are documented using the Excel template provided in Appendix 2
- Test case IDs strictly follow the required naming conventions:
  - Pos_Fun_xxxx – Positive Functional Test Cases
  - Neg_Fun_xxxx – Negative Functional Test Cases
  - Pos_UI_xxxx – Positive UI Test Cases
  - Neg_UI_xxxx – Negative UI Test Cases
- Input length types (S / M / L) are clearly specified for each test case
- The “What is covered by the test” column follows the exact order defined
  in the assignment specification

---

# Important Notes
- The system supports standard Singlish to Sinhala transliteration only
- Chat-style shorthand or informal abbreviations (e.g., “Thx”, “u”, “gr8”)
  are not used as negative functional test cases
- Expected outputs are recorded based on observed system behavior
- The GitHub repository is publicly accessible for evaluation purposes

---

# Submission Information
- All files are renamed using the registration number (IT23186538)
- Required files are placed inside a folder named IT23186538
- The folder is zipped and submitted via CourseWeb
- Submission is completed before the official deadline

---

# Conclusion
This project demonstrates the ability to independently analyze a real-world
application, design and implement an automated testing strategy using
Playwright, and systematically document functional and UI-related test
scenarios in compliance with the IT3040 – IT Project Management Assignment 1
requirements.
