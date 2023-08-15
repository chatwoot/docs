---
sidebar_label: "Windows 10"
title: 'Windows 10 Installation Guide'
---

### Requirements

You need to install the **Linux Subsystem for Windows**.

1. The first step is to enable "Developer mode" in Windows. You can do this by opening up Settings and navigating to "Update & Security". In there, choose the tab on the left that reads "For Developers". Turn the "Developer mode" toggle on to enable it.

<img src={require('./img/developer-mode.jpg').default} width="500" alt="Enable Developer Mode" />

2. Next you have to enable the Windows Subsystem for Linux. Open the "Control Panel" and go to "Programs and Features". Click on the link on the left "Turn Windows features on or off". Look for the "Windows Subsystem for Linux" option and select the checkbox next to it.

<img src={require('./img/enable-wsl.jpg').default} width="500" alt="Enable WSL" />

3. Once that's complete, you can open up the Start Menu again and search for "Bash". This time it will have the Ubuntu logo.

### Install Git

```bash
apt install git -y
```

### Install RVM

You need software-properties-common installed in order to add PPA repositories.

```bash
apt install software-properties-common -y

gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable --rails

# If the command rvm not exists
ln -s /usr/local/rvm/bin/* /usr/bin
```

Enable `Run command as a login shell` in terminal `Preferences`. Restart your computer.

### Install Ruby

Chatwoot APIs are built on Ruby on Rails. You need to install Ruby 3.2.2:

```bash
rvm install ruby-3.2.2
```

Use ruby 3.2.2 as default:

```bash
rvm use 3.2.2 --default
```

### Install NodeJS and Yarn
```bash
# Getting NodeJS
version=$(curl -s https://nodejs.org/dist/ | grep -oP "(?<=v)\d+\.\d+\.\d+" | sort -rV | head -n 1)
wget https://nodejs.org/dist/v$version/node-v$version-linux-x64.tar.xz

# Unpacking NodeJS
unxz *.xz
tar xvf *.tar
rm -r *.tar

# Move NodeJS and linking binarys
mv node-v$version-linux-x64 /usr/local/node
ln -s /usr/local/node/bin/* /usr/bin

# Activate Corepack (activates Yarn)
corepack enable
```

### Install PostgreSQL

The database used in Chatwoot is PostgreSQL. Use the following commands to install postgres:

```bash
# Install dependencies
apt install \
bison \
build-essential \
clang \
flex \
libbsd-dev \
libkrb5-dev \
libldap2-dev \
liblz4-dev \
libossp-uuid-dev \
libpam0g-dev \
libperl-dev \
libreadline-dev \
libxml2-dev \
libxslt-dev \
libzstd-dev \
python3 \
python3-dev \
python3-pip \
uuid \
uuid-dev \
zlib1g-dev -y

# Create user
useradd -M -s /usr/sbin/nologin postgres

# Get PostgreSQL
version=$(curl -s https://ftp.postgresql.org/pub/source/ | grep -oP "(?<=v)\d+\.\d+" | sort -rV | head -n 1)
wget https://ftp.postgresql.org/pub/source/v$version/postgresql-$version.tar.gz

# Unpack PostgreSQL
gunzip postgresql-$version.tar.gz
tar xvf postgresql-$version.tar
rm -r postgresql-$version.tar
mv postgresql-$version /usr/local/pgsql
cd /usr/local/pgsql

# Remove irrelevant files
rm -r .* COPYRIGHT HISTORY INSTALL README

# Linking CMD
ln -s /usr/bin/cc /usr/bin/CMD

# Configure PostgreSQL
bash configure --prefix /usr/local/pgsql --with-CC=CMD --with-llvm --with-tcl --with-perl --with-python --with-gssapi --with-pam --with-ldap --with-selinux --with-libedit-preferred --with-uuid=LIB --with-ossp-uuid --with-libxml --with-libxslt --with-lz4 --with-zstd --with-ssl=LIB --with-openssl

# Compile PostgreSQL
make install

# Link binarys
ln -s /usr/local/pgsql/bin/* /usr/bin

# Starting PostgreSQL
chmod -R 777 /usr/local/pgsql
-u postgres initdb -D /usr/local/pgsql/data
-u postgres pg_ctl -D /usr/local/pgsql/data start

# Creating root db user
-u postgres psql << EOF
CREATE USER root SUPERUSER LOGIN REPLICATION BYPASSRLS;
CREATE DATABASE root OWNER root;
EOF

# Compile PostgreSQL extensions
cd /usr/local/pgsql/contrib
make install

# Use pgcrypto extension
psql << EOF
CREATE EXTENSION pgcrypto;
EOF
```

### Install redis-server

Chatwoot uses Redis server in agent assignments and reporting. You need to install `redis-server`:

```bash
# Getting Redis
version=7.0.12
wget https://github.com/redis/redis/archive/$version.tar.gz -O redis.tar.gz

# Unpack Redis
gunzip redis.tar.gz
tar xvf redis.tar
rm -r redis.tar
mv redis-$version /usr/local/redis
cd /usr/local/redis

# Remove irrelevant files
rm -r .* *.md 00-RELEASENOTES BUGS COPYING INSTALL MANIFESTO

# Compile Redis
make && make install

# Starting server
redis-server &
```

### Install imagemagick

```bash
wget https://imagemagick.org/archive/binaries/magick -O /usr/bin/convert
chmod -R 777 /usr/bin/convert
```