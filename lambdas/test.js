exports.handler = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: 'Sls cicd Demo - prod',
				version: 'v1',
			},
			null,
			2
		),
	};
};
