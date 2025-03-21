const { exec } = require('child_process');

const LOCAL_CONNECTION_INTERFACE_NAME = 'Wi-Fi';
const LOCAL_CONNECTION_IPV4_SEARCH = 'IP Address';

exec(`netsh.exe interface ip show address "${LOCAL_CONNECTION_INTERFACE_NAME}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error.message}`, LOCAL_CONNECTION_INTERFACE_NAME);
    return;
  }
  if (stderr) {
    console.error(`Erro no comando: ${stderr}`);
    return;
  }

  // Find and print IPv4
  const lines = stdout.split('\n');
  for (const line of lines) {
    if (line.includes(LOCAL_CONNECTION_IPV4_SEARCH)) {
      const matches = line.match(/\b\d{1,3}(\.\d{1,3}){3}\b/g);
      if (matches && matches.length > 0) {
        console.log(matches[0]);
        return;
      }
    }
  }

  console.log('IPv4 not found');
});
