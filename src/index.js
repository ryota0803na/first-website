document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.top = 0;
      button.style.right = 0;

      break;
    }

    case 'ArrowDown': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.top = 80;
      button.style.right = 60;
      
      break;
    }

    case 'ArrowRight': {
      console.log('右');
      break;
    }

    case 'ArrowLeft': {
      console.log('左');
      break;
    }
  }
});

  