import Ajv from 'ajv';

const ajv = new Ajv();

ajv.addFormat('data-url', {
    type: 'string',
    validate: (data) => {
        const regex = /^data:image\/[a-zA-Z]+;base64,/;
        return regex.test(data);
    }
});

ajv.addFormat('tel', {
    type: 'string',
    validate: (data) => {
        const regex = /^\+?[1-9]\d{1,14}$/;
        return regex.test(data);
    }
});

ajv.addFormat('uri', {
    type: 'string',
    validate: (data) => {
        const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return regex.test(data);
    }
});

ajv.addFormat('email', {
    type: 'string',
    validate: (data) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(data);
    }
});
export default ajv;