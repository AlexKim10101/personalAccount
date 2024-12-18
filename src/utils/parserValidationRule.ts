interface ValidationRule {
	required?: string;
	pattern?: {
		value: string | RegExp;
		message: string;
	};
	minLength?: {
		value: number;
		message: string;
	};
	maxLength?: {
		value: number;
		message: string;
	};
}

interface ValidationRules {
	[key: string]: ValidationRule;
}

export function transformValidationRules(
	rules: ValidationRules
): ValidationRules {
	const transformedRules: ValidationRules = { ...rules };

	for (const key in transformedRules) {
		if (transformedRules[key]?.pattern?.value) {
			const patternValue = transformedRules[key].pattern?.value;
			if (
				typeof patternValue === "string" &&
				patternValue.startsWith("/") &&
				patternValue.endsWith("/")
			) {
				const regexBody = patternValue.slice(1, -1);
				transformedRules[key]!.pattern!.value = new RegExp(regexBody);
			}
		}
	}
	return transformedRules;
}
