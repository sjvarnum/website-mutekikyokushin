# Muteki Kyokushin Website - Project Planning

## Project Overview
This project involves creating a single page app (SPA) for Muteki Kyokushin, a martial arts school focused on Kyokushin karate training. The website will primarily serve as an informational platform for prospective students, parents, and martial arts enthusiasts with a contact form and a schedule of classes. We need a beautiful, modern, and responsive design that is easy to navigate and provides a great user experience. The website should be built using Vite, React, Bootstrap 5, HTML, CSS, and JavaScript, with a focus on mobile first, accessibility, and performance. The current website is https://mutekikyokushin.com/ and needs a serious redesign.

## Goals & Objectives
- Create a professional, engaging website that represents the Muteki Kyokushin brand
- Provide clear information about the martial arts school, its philosophy, and training programs
- Showcase class schedules and instructor information
- Display news and events (past and upcoming)
- Allow visitors to contact the school easily
- Optimize for mobile and desktop viewing

## Target Audience
- Prospective students interested in learning martial arts
- Parents considering enrolling their children
- Martial arts enthusiasts
- Current students looking for information and updates

## Design Requirements
- **Color Scheme**: Red and black as primary and secondary colors, light background
- **Navigation**: Sticky navbar with logo left-aligned and links right-aligned
- **Layout**: Clean, organized, and responsive design
- **Imagery**: High-quality images showcasing the martial art, training sessions, and events
- **Typography**: Easy-to-read fonts that convey strength and discipline
- **Styling Priority**: Always use Bootstrap 5 classes and utilities as the first choice for layout and styling. Only add custom CSS when Bootstrap is insufficient or unavailable.
   - **Header**: Add appropriate meta data for SEO
   - **Navigation**: Sticky navbar with logo left-aligned and links right-aligned and not full width.
   - **Hero**: Hero section with Bootstrap container full width (fluid)
   - **Content**: Content section with Bootstrap container not full width (not fluid)
   - **Sections**: Placehoder sections that are two columns wide and not full width (not fluid) with alternative left or right layout options for image placement and content placement. Can use "reverse" class to switch the layout. These should stack when on mobile devices with content always on top and image always on bottom.
   - **Footer**: Footer with Bootstrap container full width (fluid)
- **Responsive**: Ensure the website is fully responsive and works well on all devices - focus on mobile first

## Tech Stack
- **Development Environment**: NodeJS and Vite for development and build tools
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling Framework**: Bootstrap 5 (Vite installation)
- **JavaScript**: React with Bootstrap components
- **Hosting**: Netlify
- **Version Control**: Git
- **Code Style**: BEM naming convention for custom styles

## Content Structure
The website will include the following sections:

1. **Navigation**
   - Navigation bar with logo left-aligned and menu right-aligned
   - Mobile toggle for navigation menu

2. **Hero**
   - Hero section with compelling imagery and call-to-action

3. **Call To Action**
   - Testimonials from students
   - CTA button

4. **About**
   - Brief introduction to Muteki Kyokushin
   - History and philosophy of Muteki Kyokushin
   - Information about the founders/instructors
   - Values and training approach

5. **News & Events**
   - Latest news/events teaser
   - Blog-style section with latest updates
   - Archive of past news
   - Event recaps and announcements

6. **Dojo**
   - Dojo (training facility) information
   - Highlights of key programs
   - Location and contact information
   - Map and directions

7. **Karate**
   - Overview of Kyokushin karate style
   - Training methodology
   - Belt system and progression
   - Benefits of training

8. **Kids Program**
   - Information specific to children's classes
   - Age groups and curriculum
   - Benefits for children
   - Parent information

9. **Women's Program**
   - Information about women-focused classes
   - Benefits for women
   - Instructors for women's classes
   - Success stories

10. **Ring Wars**
   - Information about competition training
   - Past competition results
   - Upcoming competitions
   - Training approach for competitions

11. **Schedule**
   - Weekly class schedule
   - Class descriptions
   - Class levels
   - How to register/attend

12. **Contact**
   - Contact form
   - School location and map
   - Phone and email information
   - Social media links

## Non-Functional Requirements
- **Performance**: Fast loading times (< 3 seconds)
- **Responsiveness**: Full mobile compatibility
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO Optimization**: Proper metadata, semantic HTML
- **Analytics**: Google Analytics integration for visitor tracking