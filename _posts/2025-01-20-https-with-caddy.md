---
layout: post
title:  "HTTPS with Caddy"
date:   2025-01-20 16:30:00 -0500
categories: devops
---

In 2021, I <a href="{% post_url 2021-10-25-https-setup-on-subdomains %}">wrote</a> about setting up HTTPS with `nginx` and `swag`.
But, I've found a much simpler approach recently using `Caddy`.

[Caddy](https://github.com/caddyserver/caddy) is an easy-to-configure reverse proxy which enables HTTPS by default.  
The TLS certificates are issued by [Let's Encrypt](https://letsencrypt.org/), and caddy automatically renews them for you.

To install it, follow the [documentation](https://caddyserver.com/docs/install#debian-ubuntu-raspbian); here is the debian installation section:

```sh
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```
 
Caddy is installed as a new service, which continues to run even after you reboot your server.
```sh
# Use the service command to manage the "caddy" service.
service caddy status 
service caddy restart

# Or systemctl, if you prefer that option.
systemctl status caddy
```

The service, by default, points to the `/etc/caddy/Caddyfile`; create one if it doesn't exist.

```sh
touch /etc/caddy/Caddyfile
```

You need to have a domain with an `A` record pointing to your server's IP address.  
Here's how to do that in [Cloudflare](https://chemicloud.com/kb/article/manage-dns-in-cloudflare/), [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/), or [GoDaddy](https://kinsta.com/knowledgebase/godaddy-a-record/).


Assuming your local HTTP based service is running on port `8080` ...

```yml
# For example the comment section on this Blog is handled by remark42 image.
# Here is a portion of my docker-compose.yml file.
services:
  remark:
    image: umputun/remark42:latest
    container_name: "remark"
    restart: always
    ports:
      - "127.0.0.1:8080:8080"
    environment:
      # redacted
    volumes:
      - /var/lib/remark:/srv/var
```
Update the `Caddyfile` and restart the service -- `service caddy restart`.
```conf
# /etc/caddy/Caddyfile
yourdomain.com {
  reverse_proxy * 127.0.0.1:8080
}
```
After a minute or so, you should be able to open `https://yourdomain.com` using a web browser.

To see the service logs, use the `journalctl` command.

```sh
journalctl -f -u caddy
```

Here is more a complex example.  
See the [Caddyfile Common Patterns](https://caddyserver.com/docs/caddyfile/patterns) for more advanced setups.

```conf
myblog.com {
  # serve the html/css/js files from /root/app
  root * /root/app
  file_server

  # Api calls go to 3001 on localhost
  reverse_proxy /api/* 127.0.0.1:3001
}

# comment section on a subdomain
remark.myblog.com {
  reverse_proxy * 127.0.0.1:8080
}
```
