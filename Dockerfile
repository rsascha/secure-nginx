FROM nginxinc/nginx-unprivileged:alpine

USER root

RUN apk update

# WORKDIR /usr/local/sbin
# RUN wget https://raw.githubusercontent.com/mitchellkrogza/nginx-ultimate-bad-bot-blocker/master/install-ngxblocker -O install-ngxblocker \
#     && chmod u+x install-ngxblocker \
#     && ./install-ngxblocker \
#     && ./install-ngxblocker -x \
#     && chown nginx:root setup-ngxblocker \
#     && chmod u+x setup-ngxblocker \
#     && chown nginx:root update-ngxblocker \
#     && chmod +x update-ngxblocker \
#     && ./setup-ngxblocker \
#     && ./setup-ngxblocker -x -e conf \
#     && chown -R nginx:root /etc/nginx \
#     && echo "00     */8       *      *       *       /usr/local/sbin/update-ngxblocker" >> /etc/crontabs/root

USER 101

EXPOSE 8080
