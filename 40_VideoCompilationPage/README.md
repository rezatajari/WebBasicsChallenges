### Challenge 40 — Build a Video Compilation Page

This challenge focuses on building a **Video Compilation Page** that organizes multiple videos under different topics using semantic HTML structure. The goal is to practice structuring content clearly and embedding multimedia responsibly.

#### Objective

Create a webpage that contains a main element as the page’s primary container and includes multiple sections, each with a title, description, and embedded video.

#### Key Concepts

1. **Semantic Structure**

   * The `<main>` element should serve as the main container for all visible content on the page.
   * Each `<section>` represents a distinct category or video topic within the page.
   * Using `<h1>` for the main title and `<h2>` for subsection titles provides clear hierarchy and improves accessibility.

2. **Embedding Videos**

   * The `<iframe>` element allows embedding videos from external platforms like YouTube or Vimeo.
   * Proper attributes should be included:

     * **src**: Defines the URL of the embedded video.
     * **title**: Describes the content of the embedded video for accessibility tools.
     * **width** and **height**: Specify the display dimensions of the video frame.

3. **Accessibility and Best Practices**

   * Every embedded video should have a descriptive `title` attribute for screen readers.
   * Grouping related content (heading, text, and video) within `<section>` elements makes the layout logical and user-friendly.

#### Page Layout Requirements

* The **main** element is the only child of the **body**.
* The **h1** introduces the overall topic.
* A **paragraph** directly below the h1 provides context or a short introduction.
* Three **sections** follow, each containing:

  * An **h2** for the video title.
  * A **paragraph** with a short description.
  * An **iframe** embedding a video with defined size and descriptive title.

#### Goal

By completing this challenge, you’ll learn how to organize multimedia content semantically using HTML and enhance accessibility with proper structure and descriptive attributes. This is a foundational skill for creating informative and engaging media-rich web pages.
