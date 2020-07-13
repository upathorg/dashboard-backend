// Update with your config settings.

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://tjjxvluqxtqzbk:c2b11fdadd7c7ad65417ffe9972c6ed87fe75b83bc85d893501a84bb6331bb63@ec2-52-200-48-116.compute-1.amazonaws.com:5432/d3eet7vftpl1in?ssl=true'
  },
};
