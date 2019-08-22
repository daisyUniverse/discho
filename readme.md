# Discho

*Pronounced Dis - Ko*
*Discord Echo*



**What it does:** Allows you to pipe input from bash and have it output to a discord channel



## Usage:

```bash
echo "FOO" | discho
```

```bash
uname  -r | discho -c channelname
```



## **Installation**

**Prerequisites:** 
Node.JS, jq, bash

Copy all files to ~/.discho, then run 

```bash
./discho install 
```

Now, you can run

```bash
discho -t whateveryourbottokenis 
```

to set your bot token

