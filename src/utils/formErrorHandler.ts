export const formErrorHandler = (error : any, configs:any) => {
  switch (error.type) {
    case 'required':
      return configs[error.type];
  }
}