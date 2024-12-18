import React, { useState } from "react";
import { ITableField, IСonditionsData } from "types";
import "./tableComponent.css";

type ITableComponentProps = {
	conditions: IСonditionsData[];
	tableFields: ITableField[];
};

const TableComponent: React.FC<ITableComponentProps> = ({
	conditions,
	tableFields,
}) => {
	const [currentVersion, setCurrentVersion] = useState(conditions[0]);
	const filteredVersions = [currentVersion];

	return (
		<>
			<div className="table-control">
				{conditions.map((v, index) => (
					<React.Fragment key={"version" + v.id}>
						<div className="control-item-wrapper">
							{v.title}
							<div
								className={
									currentVersion.id === v.id
										? "control-item control-item-selected"
										: "control-item"
								}
								onClick={() => setCurrentVersion(conditions[index])}
							>
								{v.title}
							</div>
						</div>

						{index === conditions.length - 1 ? null : (
							<div className="divider"></div>
						)}
					</React.Fragment>
				))}
			</div>
			<table className="table-mob">
				<tbody>
					{tableFields.map(field => (
						<tr key={field.id}>
							<td key={"f_c" + field.id}>{field.title}</td>
							{filteredVersions.map(v => (
								<td key={field.id + v.id}>{v.data[field.id]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<table className="table-desk">
				<thead>
					<tr>
						<th className="th" key="empty_field"></th>
						{conditions.map(v => (
							<th className="th" key={v.id}>
								{v.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableFields.map(field => (
						<tr key={field.id}>
							<td key={"f_c" + field.id}>{field.title}</td>
							{conditions.map(v => (
								<td key={field.id + v.id}>{v.data[field.id]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableComponent;
