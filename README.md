# Content Moderation Service

## Overview

This project is a content moderation service that allows moderators to review posts, approve or reject them and the feed to view post and comments, user can translate them to user's language. The project is built with a **Ionic + Capacitor** and **VueJs** for a responsive user interface.

## Features

**Frontend**
  - View a list of approved posts
  - View all posts and approve or reject
  - Get current country's user
  - Translate post and comment to current country

## Technology Stack

**Frontend**: Ionic, Capacitor, VueJs, TypeScript

## Steps run project
- clone source code
- change .env.example to .env and fill in the empty variable
- run command: npm run dev

## Prerequisites configurations

### AWS service (for AWS Translate)
- `AWS_REGION`: Your AWS region. Example: `us-east-1`, `eu-west-1`, etc.
- `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID (generated from IAM in the AWS Console).
- `AWS_SECRET_ACCESS_KEY`: The secret key corresponding to the Access Key ID for authentication.

### Google Cloud (for Google Translate API)
- `GOOGLE_API_KEY`: Your Google API key for accessing Google Cloud services, specifically the Google Translate API.

# Build APK for Android

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- [Capacitor CLI](https://capacitorjs.com/) (`npm install -g @capacitor/cli`)
- [Android Studio](https://developer.android.com/studio)

## Steps
- run command: ionic build
- run command: ionic cap add android
- run command: ionic cap sync android
- run command: ionic cap open android
- Go to Build > Build Bundle(s) / APK(s) > Build APK(s).
- Install APK on device
