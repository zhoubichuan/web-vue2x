export * from './getJsonData'
export * from './login'
export * from './relationEntity'
export * from './dataEntity'
export * from './dtaInstance'
export * from './systemTag'

export const loadApi = () => {
    // 使用API获取IP地址
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        // 使用IP地址获取地理位置
        fetch(`https://ipapi.co/${data.ip}/json`)
          .then((response) => response.json())
          .then((data) => {
            fetch(`http://zhoubichuan.com/antdpro-express/api/rule5`, {
              method: "post",
              body: JSON.stringify(base),
              headers: {
                "Content-Type": "application/json",
              },
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  