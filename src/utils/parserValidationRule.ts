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

// interface ValidationRules {
// 	[key: string]: ValidationRule;
// }

// export function transformValidationRules(
// 	rules: ValidationRules
// ): ValidationRules {
// 	const transformedRules: ValidationRules = { ...rules };

// 	for (const key in transformedRules) {
// 		if (transformedRules[key]?.pattern?.value) {
// 			const patternValue = transformedRules[key].pattern?.value;
// 			if (
// 				typeof patternValue === "string" &&
// 				patternValue.startsWith("/") &&
// 				patternValue.endsWith("/")
// 			) {
// 				const regexBody = patternValue.slice(1, -1);
// 				transformedRules[key]!.pattern!.value = new RegExp(regexBody);
// 			}
// 		}
// 	}
// 	return transformedRules;
// }

export function transformToRegExp(rule: ValidationRule): ValidationRule {
	const transformedRule: ValidationRule = { ...rule };

	if (transformedRule.pattern?.value) {
		const patternValue = transformedRule.pattern.value;

		// Проверяем, является ли значение строкой регулярного выражения
		if (
			typeof patternValue === "string" &&
			patternValue.startsWith("/") &&
			patternValue.endsWith("/")
		) {
			// Убираем начальные и конечные "/"
			const regexBody = patternValue.slice(1, -1);

			// Преобразуем строку в RegExp
			transformedRule.pattern.value = new RegExp(regexBody);
		}
	}

	return transformedRule;
}
