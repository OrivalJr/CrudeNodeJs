const fs = require('fs-extra');

async function build() {
  try {
    await fs.copy('public', 'build');
    console.log('Build successful');
  } catch (err) {
    console.error(err);
  }
}

build();
