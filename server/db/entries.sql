DROP TABLE IF EXISTS entry;

CREATE TABLE entry (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    eventTimeStamp DATETIME,
    category VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL, 
    text VARCHAR(5000) NOT NULL
    PRIMARY KEY (entry_id)
)

INSERT INTO entry (entry_id, eventTimeStamp, category, country, text)
('2025-01-10 09:15:00', 'Weather', 'USA', 'A strong cold front moved across the Midwest, bringing heavy snowfall and gusty winds.'),
('2025-01-12 14:30:00', 'Economy', 'Germany', 'The quarterly economic report showed moderate growth driven by increased manufacturing output.'),
('2025-01-15 08:45:00', 'Technology', 'Japan', 'A major electronics company announced a new line of energy-efficient processors.'),
('2025-01-18 19:20:00', 'Culture', 'France', 'The annual film festival opened with a record number of international entries.'),
('2025-01-20 11:00:00', 'Sports', 'Brazil', 'The national football team began its training camp in preparation for the summer tournament.'),
('2025-01-22 16:10:00', 'Environment', 'Canada', 'Researchers reported progress in restoring a protected wetland area.'),
('2025-01-25 07:55:00', 'Health', 'Australia', 'A new public health initiative promoting nutrition was launched nationwide.'),
('2025-01-27 13:40:00', 'Education', 'India', 'Several schools adopted a new digital learning platform to assist students in remote regions.'),
('2025-01-29 10:25:00', 'Transportation', 'United Kingdom', 'Construction began on a major railway expansion to improve regional connectivity.'),
('2025-02-01 18:05:00', 'Energy', 'Norway', 'An offshore wind project reached its final approval stage after environmental review.');