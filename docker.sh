docker container run --name fluentdserver --rm -it -p 24224:24224 -v $(pwd)/docker.conf:/fluentd/etc/docker.conf -e FLUENTD_CONF=docker.conf fluent/fluentd:latest