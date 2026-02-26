// Fixing Mistakes


// Case 1: staged changes (add)
// git reset <- file name ->
// git reset


// Case 2: commited changes (for one commit)
// git reset HEAD~1
// HEAD : pointer, points to last commit
// 1 : last one commit

// Case 3: commited changes (for many commits)
// git reset <- commit hash -> (manually remove changes from file)
// git reset --hard <- commit hash -> (removes commied changes form file too)
// get commit hash form git log in cmd