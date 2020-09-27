exports.handler = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: 'Sls cicd Demo - prod - manual',
				version: 'v2',
			},
			null,
			2
		),
	};
};
