const StandingsTable = (props) => {
	return (
		<div className="standings__table-wrapper">
			<table className="standings__table">
				<thead className="standings__table-header-group" style={{ backgroundColor: props.tableHeaderColor }}>
					<tr>
						<th className="standings__table-header">#</th>
						<th className="standings__table-header">Team</th>
						<th className="standings__table-header">Gespeeld</th>
						<th className="standings__table-header">Punten</th>
						<th className="standings__table-header">Percentage</th>
						<th className="standings__table-header">+/-</th>
						<th className="standings__table-header">Eigen Score</th>
						<th className="standings__table-header">Tegen Score</th>
					</tr>
				</thead>
				<tbody>
					{props.standings.map((team) => (
						<tr key={team.positie} className="border-b text-center">
							<td className="standings__table-column">{team.positie}.</td>
							<td className="standings__table-column text-small">{team.team}</td>
							<td className="standings__table-column">{team.gespeeld}</td>
							<td className="standings__table-column">{team.punten}</td>
							<td className="standings__table-column">{Intl.NumberFormat('nl-NL', { style: 'percent', maximumFractionDigits: 2}).format(team.percentage)}</td>
							<td className="standings__table-column">{team.saldo}</td>
							<td className="standings__table-column">{team.eigenscore}</td>
							<td className="standings__table-column">{team.tegenscore}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StandingsTable;
