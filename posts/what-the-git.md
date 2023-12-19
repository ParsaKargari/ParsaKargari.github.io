---
title: "What the Git?"
slug: "what-the-git"
date: "2023-12-18"
tags: ["Git", "Version Control", "Beginner"]
author: "Parsa Kargari"
description: "A beginner-friendly guide to Git and version control. This guide covers everything from setting up Git to making commits and pushing changes to a remote repository."
---

## Introduction to Git and Version Control

Imagine you're a writer working on a book with several co-authors. Each chapter is fluid, with changes happening all the time. How do you keep track of who wrote what, merge different parts without losing work, and revert to previous versions if a chapter goes off track? Enter Git, the time machine and collaboration for coders.

### What is Git?

Git is like a diary for your code. It remembers every change, who made it, and when. It lets you peek into the past, make parallel universes (branches) to try out new ideas, and choose which realities (changes) to keep.

### Git vs. GitHub

Git is your diary, living on your computer. GitHub is the library where everyone's diaries get stored. It's a place to showcase your work, borrow from others, and work on group projects. Git is local, GitHub is remote on the cloud, where users online can view your code.
Remember: Git is the tool, GitHub is the platform.

### Why Use Git?

- **Snapshotting**: Like saving your game at critical points, Git saves snapshots of your project.
- **Branching and Merging**: Branching is like keeping a personal diary in a multiverse. You can merge diaries when you want to synchronize the storylines.
- **Collaboration**: You and other developers can write stories together without overwriting each other's chapters.
- **Track Changes**: It's like having a history of who wrote which part of the story and why.
- **Distributed Development**: Write your story from anywhere, even without internet, and update the library later.

### Installing Git

1. Download Git from [git-scm.com](https://git-scm.com/downloads).
2. Follow the installation instructions for your specific operating system.
3. To verify the installation, open a terminal and type `git --version`.

### Configuring Git

Set up your identity in Git's world with the following spells in your command prompt:

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

Make sure to use the same email address you used to sign up for GitHub.

### Basic Git Commands

- `git init`: Summoning the diary. It creates a new Git repository.
- `git clone <url>`: Creating a copy of an existing diary in your own space. We will be using this command to download code folders from GitHub. You will find yourself using this command a lot.
- `git status`: Asking the diary, "What's changed since the last time?"
- `git add <file>`: Telling the diary, "Remember this change." You can also use `git add .` to remember all the changes.
- `git commit -m "message"`: Sealing the changes in the diary with a message.
- `git push`: Sending your latest chapters to the library.
- `git pull`: Updating your diary with the library's latest stories.

### Making Your First Commit: A Story

1. Open your command prompt and navigate to the folder where your story will live.
2. Cast `git init` to create a new diary.
3. Write a chapter in your text editor and save it as `chapter1.txt`.
4. Use `git status`. The diary will tell you there's a new chapter it doesn't remember.
5. Add the chapter to the diary with `git add chapter1.txt`.
6. Seal the chapter into the diary's memory with `git commit -m "Begin the journey"`.

### Flow of Work

Cloning a repository, making changes, and pushing them to GitHub is the most common workflow. Here's how it works:

```bash
git clone <url> # Downloading a folder from GitHub, someones "diary"

git status # Asking the diary, "What's changed since the last time?"

# We make some changes to the folder, add something new

git add . # Let's save EVERY change locally. note the dot

git commit -m "message" # Saving the changes with a message that describes the changes we made

git push # Sending the changes to GitHub for everyone to see
```

Another common workflow is to pull changes from GitHub before making your own changes. This is useful when you're working on a group project and want to make sure you're working with the latest version of the code.

```bash
git clone <url> # Downloading a folder from GitHub, someones "diary"

git status # Asking the diary, "What's changed since the last time?"

# Someone else made some changes to the folder, added something new
# Our local folder is now out of date, it doesn't have the latest changes

git pull # Pulling the latest changes from GitHub, updating our local folder

# We make some changes to the folder, add something new

git add . # Let's save EVERY change locally. note the dot

git commit -m "message" # Saving the changes with a message that describes the changes we made

git push # Sending the changes to GitHub for everyone to see
```

So far we've learned how to commit changes to our local repository and push them to GitHub. But what if we want to revert to a previous version of our code? Or what if we want to try out a new idea without messing up our current code? This is where branching comes in.

### Branching

Branching is like keeping a personal diary in a multiverse. You can make changes to your code without affecting the main branch. You can merge branches when you want to synchronize the storylines.

- `git branch`: Listing all the branches in your diary.
- `git branch <name>`: Creating a new branch.
- `git checkout <name>`: Switching to a branch.
- `git merge <name>`: Merging a branch into the main branch. Note: You must be on the main branch to merge another branch into it.

### Branching: A Story

1. Open your command prompt and navigate to the folder where your story will live.
2. Cast `git init` to create a new diary.
3. Write a chapter in your text editor and save it as `chapter1.txt`.
4. Use `git status`. The diary will tell you there's a new chapter it doesn't remember.
5. Add the chapter to the diary with `git add chapter1.txt`.
6. Seal the chapter into the diary's memory with `git commit -m "Begin the journey"`.
7. Create a new branch with `git branch new-idea`.
8. Switch to the new branch with `git checkout new-idea`.
9. Write a new chapter in your text editor and save it as `chapter2.txt`.
10. Add the chapter to the diary with `git add chapter2.txt`.
11. Seal the chapter into the diary's memory with `git commit -m "New idea"`.
12. Switch back to the main branch with `git checkout main`.
13. Merge the new branch into the main branch with `git merge new-idea`.

A simple branching visual:

<img src="https://global.discourse-cdn.com/business4/uploads/inductiveautomation/original/3X/0/d/0d19837bbaf82a71ab35b2a62c5f8776af8e900a.png" alt="Branching Visual" style='margin: auto; max-width: 100%; height: auto;' >

_Image Source: [Inductive Automation](https://forum.inductiveautomation.com/t/git-branching-strategy/31386)_

### Common Workflow Pattern

_Combining everything we've learned so far, here's a common workflow pattern:_

```bash
# Let's say we're working on a group project

git clone <url> # Downloading a folder from GitHub

git status # Asking the diary, "What's changed since the last time?"

# Someone else made some changes to the folder, added something new

git pull # Pulling the latest changes from GitHub, updating our local folder

# We make some changes to the folder, add something new

git add . # Let's save EVERY change locally. note the dot

git commit -m "message" # Saving the changes with a message that describes the changes we made

git push # Sending the changes to GitHub for everyone to see

# We want to try out a new idea without messing up the current code

git branch new-idea # Creating a new branch

git checkout new-idea # Switching to the new branch

# We make some changes to the folder, add something new

git add . # Let's save EVERY change locally. note the dot

git commit -m "message" # Saving the changes with a message that describes the changes we made

git push # Sending the changes to GitHub for everyone to see

# Note: We're still on the new-idea branch.
# Therefor, the changes we made are only visible on the new-idea branch on GitHub not the main branch.

# We're happy with the new idea and want to merge it into the main branch

git checkout main # Switching to the main branch

git merge new-idea # Merging the new-idea branch into the main branch

git push # Sending the changes to GitHub for everyone to see

# We're done with the new-idea branch, let's delete it

git branch -d new-idea # Deleting the new-idea branch.

```

### Messing Up

What if you make a mistake and want to revert to a previous version of your code? Or what if you want to discard all your changes and start over? This is where resetting comes in.

- `git log`: Listing all the commits in your diary.
- `git reset --hard <commit>`: Reverting to a previous commit. Note: This will discard all the changes you've made since the commit you're reverting to.
- `git reset --hard`: Discarding all the changes you've made since the last commit.

### Messing Up: A Story

Great stories are full of mistakes. Here's how to fix them:

1. Open your command prompt and navigate to the folder where your story will live.
2. Cast `git init` to create a new diary.
3. Write a chapter in your text editor and save it as `chapter1.txt`.
4. Use `git status`. The diary will tell you there's a new chapter it doesn't remember.
5. Add the chapter to the diary with `git add chapter1.txt`.
6. Seal the chapter into the diary's memory with `git commit -m "Begin the journey"`.
7. Write a new chapter in your text editor and save it as `chapter2.txt`.
8. Add the chapter to the diary with `git add chapter2.txt`.
9. Seal the chapter into the diary's memory with `git commit -m "New idea"`.
10. Use `git log` to see the history of your diary.
11. Revert to the first commit with `git reset --hard <commit>`. Note: Replace `<commit>` with the commit ID you want to revert to. You can also use `git reset --hard` to discard all the changes you've made since the last commit.

### Best Practices

- Make small, frequent commits: It's like writing and saving one paragraph at a time.
- Write meaningful commit messages: They're the summary of your paragraphs, explaining the essence of your changes.
- Keep your branches short-lived: Merge them back after the idea has been fleshed out or discarded.
- Don't worry about making mistakes: You can always revert to a previous version.
- Don't commit sensitive information: Never commit passwords, API keys, or other sensitive information to a public repository.
- Push your code to GutHub regularly: It's like backing up your diary to the cloud.

### Conclusion

Just like a diary or a library, Git and GitHub are about preserving history, sharing stories, and working together. With these tools, you're now ready to write your own coding tales.

Remember, practice makes perfect. Start using Git for your projects, no matter how small, and these commands will become second nature in no time.

-- Parsa
