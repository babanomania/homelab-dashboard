# Homelab Dashboard

A simple dashboard for selhosted apps

## Setup Steps

```bash
cd /opt
sudo git clone https://github.com/babanomania/homelab-dashboard.git
cd homelab-dashboard/
sudo npm install
sudo cp src/config.json.sample src/config.json
```

now edit the config.json with your links

```bash
cd /opt/homelab-dashboard/
sudo npm run build
sudo -rf /usr/share/nginx/html/*
sudo -r build/* /usr/share/nginx/html/
```

## Screenshot

![web-mode](https://github.com/babanomania/homelab-dashboard/raw/master/screenshots/ipad.png) 
