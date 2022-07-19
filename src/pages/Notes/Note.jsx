import React, { useContext } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";

const Note = ({ title, content, color, trashed, archived }) => {
	const { theme } = useContext(GlobalContext);
	return (
		<div
			className="note"
			style={{
				backgroundColor: `var(--${color}-${
					theme === "light" ? "100" : "700"
				})`,
			}}
		>
			<div className="note-title">
				<span>{title}</span>
			</div>
			<div className="note-content">{content}</div>
			<div className="note-buttons">
				{!trashed ? (
					<>
						<button
							className="note-button"
							title="Background Color"
						>
							<MaterialIcons>palette</MaterialIcons>
						</button>
						<button className="note-button" title="Copy Note">
							<MaterialIcons>content_copy</MaterialIcons>
						</button>
						<button className="note-button" title="Add to list">
							<MaterialIcons>playlist_add</MaterialIcons>
						</button>
						<button
							className="note-button"
							title={archived ? "Unarchive Note" : "Archive Note"}
						>
							<MaterialIcons>
								{archived ? "unarchive" : "archive"}
							</MaterialIcons>
						</button>
						<button className="note-button" title="Delete Note">
							<MaterialIcons>delete</MaterialIcons>
						</button>
					</>
				) : (
					<>
						<button className="note-button" title="Restore Note">
							<MaterialIcons>restore</MaterialIcons>
						</button>
						<button className="note-button" title="Delete forever">
							<MaterialIcons>delete_forever</MaterialIcons>
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Note;
