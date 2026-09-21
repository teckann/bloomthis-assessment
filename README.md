## Step 1: Initialize a Local Git Repo

```terminal
git init
git status
```

## Step 2: Create a New Branch (feature/assessment-answers)

```terminal
git checkout -b feature/assessment-answers
```

## Step 3: Commit the Answer

```terminal
git add .
git status
git commit -m "add: coding script (Q1) & sql file (Q2)"
```

## Step 4: Push the Repo

```terminal
git remote add origin https://github.com/teckann/bloomthis-assessment.git
git push -u origin feature/assessment-answers
```

## Step 5: Create README.md & Push

```terminal
git add README.md
git status
git commit -m "add: README.md"
git push -u origin feature/assessment-answers
```
