# Dockerfile

FROM python:3.10-slim

ENV ODOO_VERSION=17.0 \
    ODOO_USER=odoo \
    ODOO_HOME=/opt/odoo \
    ODOO_VENV=/opt/odoo-venv \
    ODOO_ADDONS=/opt/odoo/addons \
    ODOO_CONFIG=/etc/odoo17.conf \
    ODOO_LOG_FILE=/var/log/odoo/odoo17.log \
    ODOO_PORT=1717

# Install required system packages
RUN apt-get update && apt-get install -y \
    git python3-dev libpq-dev build-essential wget \
    node-less libjpeg-dev libxml2-dev libxslt1-dev zlib1g-dev \
    libsasl2-dev libldap2-dev libffi-dev libssl-dev \
    wkhtmltopdf \
    && rm -rf /var/lib/apt/lists/*

# Create Odoo user and directories
RUN useradd -m -d /home/$ODOO_USER -s /bin/bash $ODOO_USER && \
    mkdir -p $ODOO_ADDONS /var/log/odoo /var/lib/odoo

# Clone Odoo source
RUN git clone --depth 1 --branch $ODOO_VERSION https://github.com/odoo/odoo.git $ODOO_HOME

# Setup virtualenv and install Python dependencies
RUN python3 -m venv $ODOO_VENV && \
    $ODOO_VENV/bin/pip install --upgrade pip && \
    $ODOO_VENV/bin/pip install -r $ODOO_HOME/requirements.txt

# Copy config file
COPY odoo17.conf $ODOO_CONFIG

# Fix ownership
RUN chown -R $ODOO_USER:$ODOO_USER $ODOO_HOME $ODOO_ADDONS /var/log/odoo /var/lib/odoo $ODOO_CONFIG

# Expose Odoo port
EXPOSE $ODOO_PORT

# Switch to odoo user and run Odoo
USER $ODOO_USER
CMD ["bash", "-c", "/opt/odoo-venv/bin/python3 /opt/odoo/odoo-bin -c /etc/odoo17.conf"]
