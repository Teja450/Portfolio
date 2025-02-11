# CultureCraze Couture - Fashion Recommendation System

## Introduction
Fashion is more than just wearing clothes—it's a form of self-expression. **CultureCraze Couture** is an innovative fashion recommendation system tailored for the diverse and rich landscape of Indian fashion. Leveraging advanced machine learning and deep learning techniques, the platform provides personalized style recommendations through image-based and text-based searches, wardrobe management, and virtual try-on capabilities.

## Features
- **Personalized Recommendations**: Tailors fashion suggestions based on user-uploaded images and text inputs.
- **Image-Based Search**: Utilizes ResNet50 and K-Nearest Neighbors (KNN) to analyze images and find similar fashion items.
- **Text-Based Search**: Processes user queries to recommend relevant apparel.
- **Virtual Try-On**: Integrates U-Net and Gaussian Mixture Model (GMM) to allow users to virtually try on recommended outfits.
- **Wardrobe Management**: Helps users organize their clothing items and receive personalized style suggestions.
- **Color Detection**: Employs advanced algorithms for precise matching based on color combinations.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Database**: MySQL
- **Machine Learning/Deep Learning**:
  - **ResNet50**: For image feature extraction.
  - **KNN**: For matching recommendations.
  - **CNN**: For advanced image processing.
  - **U-Net**: For virtual try-on features.
  - **GMM**: For clothing segmentation.
  - **Color Detection Algorithms**

## System Architecture
The system is divided into several key modules:
1. **User Module**: Manages authentication, profile management, and user preferences.
2. **Recommendation Module**: Processes both image and text data to generate personalized fashion suggestions.
3. **Wardrobe Management Module**: Organizes user clothing items and suggests outfit combinations.
4. **Virtual Try-On Module**: Uses deep learning models to overlay apparel on user images.
5. **Database Layer**: Stores user data, fashion items, and recommendation logs.

## Installation Guide
### Prerequisites
- **Python 3.8+**
- **Node.js 14+**
- **MySQL Database**

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Fashion-Recommendation-System.git
   cd Fashion-Recommendation-System
