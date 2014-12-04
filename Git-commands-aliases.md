# Aliases for Git commands

Hello friends, we all working on git for so long and some times its tyring to write a long commands to achieve some tasks on Git.
So, here is the solution. I've come up with a small, easy but effective solution to minimizing the lengthy commands in a simpler and shorter commands.
You just need to create an aliases for the existing commands and it will work as it is.

The way of creating aliases is different in Windows and Unix. Let's see the both approaches.

## Common aliases

### For Windows users:

    RUN these commands on git console.

        git config --global alias.co checkout

        git config --global alias.ci commit

        git config --global alias.st status

        git config --global alias.br branch

        git config --global alias.type 'cat-file -t'

        git config --global alias.dump 'cat-file -p'

Or Add the following to the '.gitconfig' file in your HOME directory(where git present).

    [alias]
      co = checkout

      ci = commit

      st = status

      br = branch

      type = cat-file -t

      dump = cat-file -p


### For Linux/Unix users:

For Linux you need write the following code at the end in the '.bashrc' file in your home directory.

    alias gst='git status'

    alias gl='git pull'

    alias gp='git push'

    alias gd='git diff --color'

    alias ga='git add'

    alias gc='git commit'

    alias gb='git branch'

    alias gco='git checkout'

    alias glog='git log'

    alias gsh='git stash'

    alias gsha='git stash apply'

    alias grmr='git rm -r'

    alias grmrf='git rm -rf'

------------------------------------------------------------------------------------------------------------------------

Hope the above documentations is helpful for you all.

Most welcome to any kind of suggestions and inputs in the above document.