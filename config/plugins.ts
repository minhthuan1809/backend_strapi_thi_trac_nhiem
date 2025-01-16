export default () => ({});

module.exports = {
    upload: {
        config: {
            provider: 'local', // Change this to your desired provider, e.g., 'aws-s3'
            providerOptions: {
                sizeLimit: 1000000, // Giới hạn kích thước tệp (ví dụ: 1MB)
                // Add other provider-specific options here
                // For local provider, you can specify the storage path
                path: '/path/to/store/images', // Change this to your desired storage path
            },
        },
    },
};