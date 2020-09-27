exports.handler = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: 'Sls cicd Demo',
				version: 'v1',
			},
			null,
			2
		),
	};
};
