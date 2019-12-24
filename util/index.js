module.exports.respond = (error, data, request, response) => {
    if(error) {
        console.log('[!SERVER] '+error);
        response.json({ 'success': false, 'error': error });
    }
    else {
        const responseData = {};
        responseData['data'] = data;
        responseData['success'] = true;
        responseData['error'] = null;
        response.json(responseData);
    }
};
